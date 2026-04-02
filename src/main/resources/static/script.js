// Fetch projects from the backend
async function loadProjects() {
    const container = document.getElementById('project-container');
    if (!container || container.querySelector('.coming-soon')) return;

    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();
        
        container.innerHTML = ''; // Clear loading status

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card animate-on-scroll';
            projectCard.innerHTML = `
                <img src="${project.imageLink}" alt="${project.title}" class="card-image">
                <div class="card-tech">${project.tech}</div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="card-actions">
                        <a href="${project.liveLink}" class="btn">Live <~></a>
                    </div>
                </div>
            `;
            container.appendChild(projectCard);
            observer.observe(projectCard); // Observe the new element for animation
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        container.innerHTML = '<div class="error">Failed to load projects from backend.</div>';
    }
}

// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scroll to the target section
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const parent = el.parentElement;
            
            // Smarter staggered delay: Detect grids or lists automatically
            if (parent && (
                parent.classList.contains('skills-grid') || 
                parent.classList.contains('about-content') || 
                parent.classList.contains('skills-col') ||
                parent.classList.contains('contact-box') ||
                parent.classList.contains('footer-icons')
            )) {
                const index = Array.from(parent.children).indexOf(el);
                el.style.transitionDelay = `${index * 0.12}s`;
            }

            el.classList.add('visible');
            observer.unobserve(el);
        }
    });
}, observerOptions);

// Scroll Progress Tracker Logic
window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

document.querySelectorAll('section, .skill-box, .about-text, .about-visual, .contact-text, .contact-box').forEach(el => {
    el.classList.add('animate-on-scroll');
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Load projects on DOM ready
document.addEventListener('DOMContentLoaded', loadProjects);

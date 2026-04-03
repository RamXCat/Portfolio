import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { motion } from 'framer-motion';

const Sidebar = () => (
  <div className="media-sidebar">
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="d-flex flex-row flex-lg-column align-items-center"
    >
      <div className="media-line"></div>
      <div className="d-flex flex-column gap-3 align-items-center mt-3 mt-lg-0">
        <a href="https://github.com/RamXCat" target="_blank" title="GitHub"><img src="/img/Github.svg" alt="Github" width="32" className="cursor-pointer hover-accent" /></a>
        <a href="https://discord.com/users/551067952749740051" target="_blank" title="Discord"><img src="/img/Discord.svg" alt="Discord" width="25" className="cursor-pointer hover-accent" /></a>
        <a href="https://www.instagram.com/ramxcat" target="_blank" title="Instagram"><img src="/img/insta_logo.png" alt="Instagram" width="25" className="cursor-pointer hover-accent" /></a>
        <a href="https://www.linkedin.com/in/ramxcat" target="_blank" title="LinkedIn"><img src="/img/Linkedin.svg" alt="Linkedin" width="25" className="cursor-pointer hover-accent" /></a>
      </div>
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-4">
        <div className="container position-relative">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
            <motion.img 
              src="/img/RamXCat.png" 
              alt="logo" 
              width="16" 
              height="16" 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            RamXCat
          </a>
          
          <div className="menu-cont d-lg-none" onClick={() => setIsOpen(!isOpen)}>
            <button role="button" className={`menu-btn border-0 bg-transparent shadow-none p-0 ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="collapse navbar-collapse d-none d-lg-block border-0 bg-transparent">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item ms-lg-4"><a className="nav-link" href="#home"><span className="text-accent">#</span>home</a></li>
              <li className="nav-item ms-lg-4"><a className="nav-link" href="#projects"><span className="text-accent">#</span>work</a></li>
              <li className="nav-item ms-lg-4"><a className="nav-link" href="#about"><span className="text-accent">#</span>about-me</a></li>
              <li className="nav-item ms-lg-4"><a className="nav-link" href="#contact"><span className="text-accent">#</span>contact</a></li>

            </ul>
          </div>

          {/* Side-sliding Menu for Mobile */}
          <ul className={`menubar d-lg-none ${isOpen ? 'open' : ''}`}>
            <li className=""><a className="nav-link active" href="#home" onClick={() => setIsOpen(false)}><span className="text-accent">#</span>home</a></li>
            <li className=""><a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}><span className="text-accent">#</span>work</a></li>
            <li className=""><a className="nav-link" href="#about" onClick={() => setIsOpen(false)}><span className="text-accent">#</span>about-me</a></li>
            <li className=""><a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}><span className="text-accent">#</span>contact</a></li>

            {/* Socials inside mobile menu */}
            <li className="mt-auto pb-5">
              <div className="d-flex justify-content-center gap-4">
                <a href="https://github.com/RamXCat" target="_blank"><img src="/img/Github.svg" alt="Github" width="64" /></a>
                <a href="https://discord.com/users/551067952749740051" target="_blank"><img src="/img/Discord.svg" alt="Discord" width="64" /></a>
                <a href="https://www.instagram.com/ramxcat" target="_blank"><img src="/img/insta_logo.png" alt="Instagram" width="64" /></a>
                <a href="https://www.linkedin.com/in/ramxcat" target="_blank"><img src="/img/Linkedin.svg" alt="LinkedIn" width="64" /></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


const Hero = () => (
  <section id="home" className="py-5 mt-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="h2 font-weight-bold mb-4">
              RamXCat is a <span className="text-accent">full-stack developer</span> specializing in <span className="text-accent">Java</span> and modern web technologies
            </h1>
            <p className="text-gray fs-6 mb-4">He crafts scalable web applications where Java meets creativity</p>
            <a href="#contact" className="primary-btn">Contact me!!</a>
          </motion.div>
        </div>
        <div className="col-lg-6 text-center position-relative mt-5 mt-lg-0">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="d-flex flex-column align-items-center">
            <div className="position-relative d-inline-block">
              <img src="/img/logo_outline.png" alt="Ornament" className="position-absolute floating" style={{ top: '20%', left: '-19px', width: '52%', zIndex: 0 }} />
              <img src="/img/Image-1.png" alt="Hero" className="img-fluid position-relative" style={{ top: '11px', maxWidth: '400px', zIndex: 1, right: '-7px' }} />
              <img src="/img/2_logo_outline.png" alt="Dots" className="position-absolute floating" style={{ top: '53%', right: '-91px', width: '51%', zIndex: 2 }} />
            </div>
            <div className="border-terminal text-start d-flex align-items-center" style={{ marginTop: '11px', backgroundColor: 'var(--bg-primary)', zIndex: 3, width: 'auto', paddingRight: '1.3rem', paddingLeft: '0.5rem', paddingTop: '0.25rem', paddingBottom: '0.25rem', gap: '2rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--accent-primary)', flexShrink: 0 }}></div>
              <span className="text-gray fw-semibold fs-6">Currently working on <span className="text-white fw-bold">Portfolio</span></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="py-5">
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex flex-column w-100" style={{ maxWidth: '700px' }}>
        <p className="p-4 border-terminal position-relative quote-text lead mb-0 text-center font-medium">
          Optimizing code saves both time and electricity
        </p>
        <div className="p-3 border-terminal border-top-0 align-self-end">
          - Dr. Who
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-5 relative">
    {/* Decorative ornaments for projects section */}
    <div className="position-absolute floating animate-bounce-slow" style={{ width: '80px', height: '80px', border: '1px solid var(--text-gray)', right: '10%', top: '0' }}></div>
    <div className="position-absolute d-none d-xxl-block animate-bounce-slow" style={{ width: '100px', height: '100px', border: '1px solid var(--text-gray)', right: '-5%', top: '50%', zIndex: 0 }}></div>

    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="section-heading mb-0 after">projects</h2>
        <a href="#" className="text-white text-decoration-none hover-accent">View all ~~&gt;</a>
      </div>
      <div className="row justify-content-center py-5">
        <div className="col-12 text-center">
          <h3 className="text-gray mb-3">&lt; coming soon /&gt;</h3>
          <p className="text-white opacity-50">Currently building some exciting Java & Web applications...</p>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-5 relative">
    <div className="container">
      <h2 className="section-heading mb-5 after">skills</h2>
      <div className="row g-4 align-items-start">
        <div className="col-lg-5 d-none d-lg-block position-relative p-4">
          <div className="position-relative" style={{ minHeight: '300px' }}>
            <img src="/img/Dots.png" alt="" className="position-absolute floating" style={{ width: '64px', left: '0', top: '10%' }} />
            <div className="position-absolute floating animate-bounce-slow" style={{ width: '80px', height: '80px', border: '1px solid var(--text-gray)', right: '10%', top: '0' }}></div>
            <img src="/img/logo_outline.png" alt="" className="position-absolute floating" style={{ width: '112px', left: '10%', bottom: '0' }} />
            <img src="/img/Dots.png" alt="" className="position-absolute floating" style={{ width: '64px', right: '20%', bottom: '20%' }} />
            <div className="position-absolute floating animate-bounce-slow" style={{ width: '56px', height: '56px', border: '1px solid var(--text-gray)', right: '0', bottom: '10%' }}></div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="border border-terminal mb-3 hover-accent">
                <div className="p-2 border-bottom border-terminal fw-bold">Languages</div>
                <div className="p-2 text-gray lh-lg">Java Python JavaScript</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border border-terminal mb-3 hover-accent">
                <div className="p-2 border-bottom border-terminal fw-bold">Databases</div>
                <div className="p-2 text-gray lh-lg">MySQL MongoDB</div>
              </div>
              <div className="border border-terminal mb-3 hover-accent">
                <div className="p-2 border-bottom border-terminal fw-bold">Others</div>
                <div className="p-2 text-gray lh-lg">HTML CSS REST</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border border-terminal mb-3 hover-accent">
                <div className="p-2 border-bottom border-terminal fw-bold">Tools</div>
                <div className="p-2 text-gray lh-lg">VSCode Neovim Linux Git & Github</div>
              </div>
              <div className="border border-terminal mb-3 hover-accent">
                <div className="p-2 border-bottom border-terminal fw-bold">Frameworks</div>
                <div className="p-2 text-gray lh-lg">React SpringBoot Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-5 relative">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2 className="section-heading mb-4 after">about-me</h2>
          <p className="text-gray mb-4 lh-lg">
            Hi, this is <span className="text-accent">Ram</span>! <br/><br/>
            I am a <span className="text-accent">full stack developer</span> who has learned everything from scratch and comes from India. I create scalable web applications using <span className="text-accent">Java</span> and current technology trends, keeping both backend efficiency and frontend experience in mind. <br/><br/>
            It has always been my hobby to turn an idea into reality. I love building backends and frontends for practical solutions. I keep learning new technologies every day and hone my skills.
          </p>
          <a href="#" className="primary-btn">Read more -&gt;</a>
        </div>
        <div className="col-lg-6 text-center position-relative">
           {/* Reference ornaments for about section */}
           <img src="/img/Image.png" alt="About" className="img-fluid border-bottom border-accent" style={{ maxWidth: '400px', position: 'relative', zIndex: 1 }} />
           <img src="/img/Dots.png" alt="" className="position-absolute floating d-none d-lg-block" style={{ width: '104px', left: '21%', top: '13%', zIndex: 2 }} />
           <img src="/img/Dots.png" alt="" className="position-absolute floating d-none d-lg-block" style={{ width: '112px', right: '95px', top: '65%', zIndex: 0 }} />
        </div>
      </div>
    </div>
    {/* Large background square ornament from reference */}
    <span className="position-absolute d-none d-xxl-block animate-bounce-slow" style={{ width: '160px', height: '160px', border: '1px solid var(--text-gray)', left: '-10%', top: '37%' }}></span>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-5 relative">
    <div className="container">
      <h2 className="section-heading mb-4 after">contact</h2>
      <div className="row justify-content-between align-items-start gy-5">
        <div className="col-lg-6">
          <p className="text-gray fs-6 mb-5">
            I'm open to job opportunities, but if you have any questions or just want to connect, feel free to reach out!
          </p>
        </div>
        <div className="col-lg-5">
          <div className="p-4 border-terminal bg-blur">
            <h4 className="fw-bold mb-4">Message me here</h4>
            <div className="d-flex flex-column gap-3">
              <p className="text-gray d-flex align-items-center gap-4 mb-0">
                <img src="/img/Discord.svg" alt="Discord" width="32" height="32" />
                ramxcat
              </p>
              <p className="text-gray d-flex align-items-center gap-4 mb-0">
                <img src="/img/Email.svg" alt="Email" width="32" height="32" />
                ramxcat@proton.me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Decorative dots ornament as seen in reference */}
    <img src="/img/Dots.png" alt="" className="position-absolute d-none d-xl-block animate-bounce-slow" style={{ width: '112px', left: '-10%', top: '45%', opacity: 0.5 }} />
  </section>
);

const Footer = () => (
  <footer className="py-5 border-top border-terminal mt-5">
    <div className="container">
      <div className="row justify-content-between align-items-start gy-4 mb-5">
        <div className="col-lg-6">
           <div className="d-flex align-items-center gap-2 font-weight-bold mb-3">
              <motion.img 
  src="/img/RamXCat.png" 
  alt="logo" 
  width="16" 
  height="16" 
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.5 }}
/>
              RamXCat
              <span className="text-gray font-weight-normal ms-3">ramxcat@proton.me</span>
           </div>
           <p className="text-white">Crafting scalable web applications where Java meets creativity</p>
        </div>
        <div className="col-lg-3 text-lg-end">
          <h5 className="font-weight-bold mb-3">Media</h5>
          <div className="d-flex justify-content-lg-end gap-3">
            <a href="https://github.com/RamXCat" target="_blank" title="GitHub"><img src="/img/Github.svg" alt="Github" width="32" className="cursor-pointer hover-accent" /></a>
            <a href="https://discord.com/users/551067952749740051" target="_blank" title="Discord"><img src="/img/Discord.svg" alt="Discord" width="32" className="cursor-pointer hover-accent" /></a>
            <a href="https://www.instagram.com/ramxcat" target="_blank" title="Instagram"><img src="/img/insta_logo.png" alt="Instagram" width="32" className="cursor-pointer hover-accent" /></a>
            <a href="https://www.linkedin.com/in/ramxcat" target="_blank" title="LinkedIn"><img src="/img/Linkedin.svg" alt="Linkedin" width="32" className="cursor-pointer hover-accent" /></a>
          </div>
        </div>
      </div>

    </div>
  </footer>
);

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <Sidebar />
      <Navbar />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

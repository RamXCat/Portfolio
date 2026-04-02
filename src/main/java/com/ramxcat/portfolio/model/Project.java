package com.ramxcat.portfolio.model;

public record Project(
    String title,
    String description,
    String tech,
    String imageLink,
    String liveLink
) {}

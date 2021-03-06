import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a href="hello" role="button" class="navbar-burger burger" aria-label="menu" aria expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                        <a href="#AboutSection" class="navbar-item">About Me</a>
                        <a href="#SkillsSection" class="navbar-item">Skills</a>
                        <a href="#ExperienceSection" class="navbar-item">Experience</a>
                        <a href="#EducationSection" class="navbar-item">Education</a>
                        <a href="#PortfolioSection" class="navbar-item">Portfolio</a>
                        <a href="#ContactSection" class="navbar-item">Contact</a>
                        </div>
                    </div>
                </nav>
                <nav class="navbar is-fix-bottom" role="navigation" aria-label="main navigation">
                    <nav class="level is-mobile">
                        <p class="level-item has-text-centered">
                            <a href="#AboutSection" class="navbar-item">About Me</a>
                        </p>
                        <p class="level-item has-text-centered">
                            <a href="#SkillsSection" class="navbar-item">Skills</a>
                        </p>
                        <p class="level-item has-text-centered">
                            <a href="#ExperienceSection" class="navbar-item">Experience</a>
                        </p>
                        <p class="level-item has-text-centered">
                            <a href="#EducationSection" class="navbar-item">Education</a>
                        </p>
                        <p class="level-item has-text-centered">
                            <a href="#PortfolioSection" class="navbar-item">Portfolio</a>
                        </p>
                        <p class="level-item has-text-centered">
                            <a href="#ContactSection" class="navbar-item">Contact</a>
                        </p>
                    </nav>
                </nav>
            </div>
        );
    }
}

export default Navbar;
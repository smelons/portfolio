import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from '../Home/Home';
import Skills from '../Skills/Skills'

const About = () => <h1>About</h1>
const Experience = () => <h1>Experience</h1>

class Navigation extends Component {
  render() {
    return (
      <Router>
        <section class="hero is-fullheight is-dark">
          <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <div class="navbar-item" href="/">
                  <Link to="/">MEL</Link>
                </div>
                <div role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              </div>
              <div class="navbar-menu">
                <div class="navbar-start">
                  <div class="navbar-item">
                    <Link to="/about">About</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/experience">Experience</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/skills">Skills</Link>
                  </div>
                </div>
                <div class="navbar-end">
                  <div class="navbar-item">
                    <a href="https://www.linkedin.com/in/richardmelbailey">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                  </div>
                  <div class="navbar-item">
                    <a href="https://github.com/smelons/portfolio">
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
        </section>
      </Router>
    );
  }
}

export default Navigation;


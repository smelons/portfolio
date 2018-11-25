import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';

const About = () => <h1>About</h1>;
const Experience = () => <h1>Experience</h1>;

export default function Navigation() {
  return (
    <Router>
      <section className="hero is-fullheight is-dark">
        <div className="hero-head">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <div className="navbar-item" href="/">
                <Link to="/">MEL</Link>
              </div>
              <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item">
                  <Link to="/about">About</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/experience">Experience</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/skills">Skills</Link>
                </div>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <a href="https://www.linkedin.com/in/richardmelbailey">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div className="navbar-item">
                  <a href="https://github.com/smelons/portfolio">
                    <FontAwesomeIcon icon={faGithub} />
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
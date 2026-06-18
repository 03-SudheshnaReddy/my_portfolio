import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profileIcon from "../assets/profile.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/github.png';
import navIcon2 from '../assets/img/leetcode.png';
import codeforcesIcon from "../assets/img/codeforces.png";
import codechefIcon from "../assets/img/codechef.png";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand
            href="#home"
            className="brand-home"
            onClick={() => onUpdateActiveLink("home")}
          >
            <img src={profileIcon} alt="profile" className="brand-img" />
            <span className="brand-text">@Sudheshna</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
  href="#about"
  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
  onClick={() => onUpdateActiveLink('about')}
>
  About
</Nav.Link>

<Nav.Link
  href="#skills"
  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
  onClick={() => onUpdateActiveLink('skills')}
>
  Skills
</Nav.Link>

<Nav.Link
  href="#experience"
  className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
  onClick={() => onUpdateActiveLink('experience')}
>
  Experience
</Nav.Link>

<Nav.Link
  href="#projects"
  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
  onClick={() => onUpdateActiveLink('projects')}
>
  Projects
</Nav.Link>

<Nav.Link
  href="#contact"
  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
  onClick={() => onUpdateActiveLink('contact')}
>
  Contact
</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                    <a href="https://www.linkedin.com/in/sudheshna-reddy/" target="_blank" rel="noreferrer">
                      <img src={navIcon1} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/03-SudheshnaReddy" target="_blank" rel="noreferrer">
                      <img src={navIcon3} alt="GitHub" />
                    </a>

                    <a href="https://leetcode.com/u/CodeCrest39/" target="_blank" rel="noreferrer">
                      <img src={navIcon2} alt="LeetCode" />
                    </a>

                    <a href="https://codeforces.com/profile/QuantumCodex39" target="_blank" rel="noreferrer">
                      <img src={codeforcesIcon} alt="Codeforces" />
                    </a>

                    <a href="https://www.codechef.com/users/code_crest39" target="_blank" rel="noreferrer">
                      <img src={codechefIcon} alt="CodeChef" />
                    </a>
                  </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
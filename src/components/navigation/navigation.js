import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = ({ children }) => {
    return (
        <div>
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand brand>
                        <a href="/">J <span className="fa fa-heart-o fa-fw" aria-hidden="true"></span> L</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem eventKey={1}><span className="fa fa-home fa-fw" aria-hidden="true"></span> Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/our-story">
                            <NavItem eventKey={2}><span className="fa fa-music fa-fw" aria-hidden="true"></span> Our Story</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                            <NavItem eventKey={3}><span className="fa fa-question-circle fa-fw" aria-hidden="true"></span> FAQ</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/wedding-day-info">
                            <NavItem eventKey={4}><span className="fa fa-info-circle fa-fw" aria-hidden="true"></span> Wedding Day Info</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <NavItem eventKey={5}><span className="fa fa-envelope-open-o fa-fw" aria-hidden="true"></span> Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}
            <footer className="footer">
                <div className="footer-text"><span className="fa fa-copyright fa-fw" aria-hidden="true"></span> J.Lim && L.Chin</div>
                <div className="footer-text-two"><a href="https://github.com/contrapunctus-xv/joeandliana"><span className="fa fa-github fa-fw" aria-hidden="true"></span></a></div>
            </footer>
        </div>
    )
};

export default Navigation;

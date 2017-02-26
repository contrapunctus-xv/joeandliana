import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = ({ children }) => {
    return (
        <div>
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">J+L</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/our-story">
                            <NavItem eventKey={2}>Our Story</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                            <NavItem eventKey={3}>FAQ</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/wedding-day-info">
                            <NavItem eventKey={4}>Wedding Day Info</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <NavItem eventKey={5}>Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}
            <footer className="footer">
                <div className="footer-text">footer text</div>
            </footer>
        </div>
    )
};

export default Navigation;

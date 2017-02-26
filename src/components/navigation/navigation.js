import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = ({ children }) => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Liana and Joe</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/howwemet">
                            <NavItem eventKey={2}>How We Met</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                            <NavItem eventKey={3}>FAQ</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/dayofinfo">
                            <NavItem eventKey={4}>Day of Info</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <NavItem eventKey={5}>Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}
        </div>
    )
};

export default Navigation;

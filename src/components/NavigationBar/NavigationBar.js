import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import './NavigationBar.css';

export default function NavigationBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><span>React Blog</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#articles">Articles</Nav.Link>
                        <Nav.Link href="#publish">Publish</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

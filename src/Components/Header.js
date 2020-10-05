import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';


export default function Header() {

    return (
        <Navbar className={'header'} collapseOnSelect expand="md" bg="transparent" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Absence Recs.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">FAQs</Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
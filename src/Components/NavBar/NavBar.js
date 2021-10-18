import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="features">Features</Nav.Link>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                    </Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                            <Dropdown.Item href="/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
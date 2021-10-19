import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ cart }) => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: 'red'
    }
    const navbar = {
        textDecoration: 'none',
        color: '#0DCAF0',
        padding: '7px 14px',
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fw-bold text-info'>
                        <Link activeStyle={activeactiveStyle} style={navbar} exact to="/">M.PharmaBD</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                        <Nav>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} exact to="/">Home</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/allproducts">Products</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/contactus">Conatct</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/login">Login</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/signup">Signup</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className='mx-3 mt-3 fw-bold text-danger text-decoration-none' to='/cart'>
                        <button type="button" className="btn position-relative">
                            <i className="fas fa-shopping-cart fs-5 text-info"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart?.length}
                            </span>
                        </button>
                    </Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent">
                            <span className="fw-bold me-3">SUNY</span>
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
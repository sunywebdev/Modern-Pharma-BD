import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import placeholder from './placeholder.jpg'

const NavBar = ({ cart }) => {
    const { user, logOut } = useAuth()
    console.log(user);
    const activeactiveStyle = {
        fontWeight: "bold",
        color: '#121521'
    }
    const navbar = {
        textDecoration: 'none',
        color: '#19CE67',
        padding: '7px 14px',
    }
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand className='fw-bold text-1 me-0'>
                        <Link activeStyle={activeactiveStyle} style={navbar} exact to="/">M.PharmaBD</Link>
                    </Navbar.Brand>
                    <Link className='d-block d-md-none mx-3 fw-bold text-danger text-decoration-none ' to='/cart'>
                        <button type="button" className="btn position-relative">
                            <i className="fas fa-shopping-cart fs-5 text-1"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart?.length}
                            </span>
                        </button>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        {user.email && <>
                            {user?.photoURL ?
                                <img src={user?.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                                :
                                <img src={placeholder} alt="mdo" width="32" height="32" className="rounded-circle" />
                            }
                            <i class="fas fa-sort-down ps-1"></i>
                        </>}
                    </Navbar.Toggle>
                    {user.email && <i onClick={logOut} className="d-block d-md-none fas fa-sign-out-alt fa-2x text-danger ps-2"></i>}
                    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                        <Nav>
                            {user.email && <span className="d-block d-md-none fw-bold me-2">Welcome, {user?.displayName}</span>}
                            <NavLink activeStyle={activeactiveStyle} style={navbar} exact to="/">Home</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/allproducts">Products</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/aboutus">About Us</NavLink>
                            <NavLink activeStyle={activeactiveStyle} style={navbar} to="/contactus">Conatct</NavLink>
                            {
                                !user?.email &&
                                <>
                                    <NavLink activeStyle={activeactiveStyle} style={navbar} to="/login">Login</NavLink>
                                    <NavLink activeStyle={activeactiveStyle} style={navbar} to="/signup">Signup</NavLink>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-none d-md-block ">
                        <Link className='mx-3 mx-md-5 fw-bold text-danger text-decoration-none  align-items-center' to='/cart'>
                            <button type="button" className="btn position-relative">
                                <i className="fas fa-shopping-cart fs-5 text-1"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart?.length}
                                </span>
                            </button>
                        </Link>
                        {user.email &&
                            <>
                                <span className="fw-bold me-2">Welcome, {user?.displayName}</span>
                                {user?.photoURL ?
                                    <img src={user?.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                                    :
                                    <img src={placeholder} alt="mdo" width="32" height="32" className="rounded-circle" />
                                }
                                <span>  <i onClick={logOut} className="fas fa-sign-out-alt fa-2x text-danger ps-2"></i></span></>
                        }
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
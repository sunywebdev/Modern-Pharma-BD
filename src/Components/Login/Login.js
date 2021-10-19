import React from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../context/useAuth';
import image from './login.png'

const Login = () => {
    const { signInUsingGoogle, signInWithEmailPassword, auth } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(location?.state?.from || '/home')
            })
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailPassword(auth, data.email, data.password)
            .then((user) => {
                // eslint-disable-next-line no-lone-blocks
                { user && history.push(location?.state?.from || '/home') }
            })
    }
    return (
        <Container className='mt-5' id='news'>
            <h2 className="fs-1 fw-bold my-5 text-info text-uppercase">Log In</h2>
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col-md-5 text-start d-none d-lg-block">
                    <img src={image} alt="" className='w-100' />
                </div>
                <div className="col-md-7">
                    <form className='col-md-7 mx-auto w-75' onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="email" placeholder="Enter Your Email"  {...register("email", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Password" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="password" placeholder="Enter Your Password"  {...register("password", { required: true })} />
                        </FloatingLabel>

                        <Button type="submit" className='px-5 button border-0 bg-info w-100 mb-3'><i className="fas fa-shopping-cart me-3"></i>Log In</Button>
                        <Button onClick={handleGoogleLogin} className='px-5 button border-0 bg-info w-100 mb-3'><i className="fas fa-shopping-cart me-3"></i>Log In With Google</Button>

                        <Link to='/signup' className='text-decoration-none'>
                            <Button className='px-5 button border-0 bg-info w-100 mb-3'><i className="fas fa-shopping-cart me-3"></i>Don't Have Account?</Button>
                        </Link>
                    </form>
                </div>
            </div>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-info border-info'>Back To Home</Button>
            </Link>
        </Container>
    );
};

export default Login;
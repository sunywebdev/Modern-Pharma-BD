import React from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../context/useAuth';
import image from './login.png'

const Login = () => {
    const { signInUsingGoogle, signInWithEmailPassword, auth, error } = useAuth()
    const location = useLocation()
    const history = useHistory()
    console.log(error);
    const errorMsg = error === 'Firebase: Error (auth/wrong-password).' ? 'Your password is Worng' : ""
    const errorMsg2 = error === 'Firebase: Error (auth/user-not-found).' ? "You don't have any account" : ''
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
            <h2 className="fs-1 fw-bold my-5 text-1 text-uppercase">Log In</h2>
            <div className="row flex-lg-row-reverse ">
                <div className="col-md-5 text-start d-none d-lg-block">
                    <img src={image} alt="" className='w-100' />
                </div>
                <div className="col-md-7">
                    <form className='col-md-7 mx-auto w-75' onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3 text-1">
                            <Form.Control className='border-1 text-1' type="email" placeholder="Enter Your Email"  {...register("email", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Password" className="mb-3 text-1">
                            <Form.Control className='border-1 text-1' type="password" placeholder="Enter Your Password"  {...register("password", { required: true })} />
                        </FloatingLabel>
                        <p className="text-danger py-1">{errorMsg}{errorMsg2}</p>
                        <Button type="submit" className='px-5 button border-0 bg-1 w-100 mb-3'><i className="fas fa-sign-in-alt me-3"></i>Log In</Button>
                        <Button onClick={handleGoogleLogin} className='px-5 button border-0 bg-1 w-100 mb-3'><i className="fab fa-google me-3"></i>Log In With Google</Button>

                        <Link to='/signup' className='text-decoration-none'>
                            <Button className='px-5 button border-0 bg-1 w-100 mb-3'><i className="far fa-question-circle me-3"></i>Don't Have Account?</Button>
                        </Link>
                    </form>
                </div>
            </div>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-1 border-1'><i className="fas fa-arrow-circle-left me-3"></i>Back To Home</Button>
            </Link>
        </Container>
    );
};

export default Login;
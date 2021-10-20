import React from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import image from './sign.jpg'
import useAuth from '../../context/useAuth';

const Signup = () => {
    const { user, createNewUserUsingEmailPassword, signInUsingGoogle, auth, error, updateProfiles } = useAuth()
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const location = useLocation()
    const errorMsg = error === 'Firebase: Error (auth/email-already-in-use).' ? 'You already have an account' : ''
    const errorMsg2 = error === 'Firebase: Password should be at least 6 characters (auth/weak-password).' ? 'Password must be 6 charactre' : ''
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(location?.state?.from || '/home')
            })
    }
    const onSubmit = (data) => {
        createNewUserUsingEmailPassword(auth, data.email, data.password)
            .then((user) => {
                updateProfiles(auth, data.displayName, data.photoURL)
                // eslint-disable-next-line no-lone-blocks
                { user && history?.go(-2) }
            })
    }
    return (
        <Container className='mt-5' id='news'>
            <h2 className="fs-1 fw-bold my-5 text-1 text-uppercase">Sign Up</h2>
            <div className="row flex-lg-row-reverse g-5">
                <div className="col-md-7">
                    <form className='col-md-7 mx-auto w-75' onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Name" className="mb-3 text-1">
                            <Form.Control defaultValue={user?.displayName} className='border-1 text-1' type="text" placeholder="Enter Your Name"  {...register("displayName", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Photo URL" className="mb-3 text-1">
                            <Form.Control defaultValue={user?.photoURL} className='border-1 text-1' type="text" placeholder="Enter Photo URL"  {...register("photoURL", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3 text-1">
                            <Form.Control defaultValue={user?.email} className='border-1 text-1' type="email" placeholder="Enter Your Email"  {...register("email", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Password" className="mb-3 text-1">
                            <Form.Control defaultValue={user?.password} className='border-1 text-1' type="password" placeholder="Enter Your Password"  {...register("password", { required: true })} />
                        </FloatingLabel>
                        <p className="text-danger py-1">{errorMsg}{errorMsg2}</p>

                        <Button type="submit" className='px-5 button border-0 bg-1 w-100 mb-3'><i className="fas fa-sign-in-alt me-3"></i>Sign Up</Button>
                        <Button onClick={handleGoogleLogin} className='px-5 button border-0 bg-1 w-100 mb-3'><i className="fab fa-google me-3"></i>Sign Up With Google</Button>
                        <Link to='/login' className='text-decoration-none'>
                            <Button className='px-5 button border-0 bg-1 w-100 mb-3'><i className="far fa-question-circle me-3"></i>Already Have Account?</Button>
                        </Link>
                    </form>
                </div>
                <div className="col-md-5 text-start d-none d-lg-block">
                    <img src={image} alt="" className='w-100' />
                </div>
            </div>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-1 border-1'><i className="fas fa-arrow-circle-left me-3"></i>Back To Home</Button>
            </Link>
        </Container>
    );
};

export default Signup;
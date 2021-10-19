import React from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
    }
    return (
        <Container className='mt-5' id='news'>
            <h2 className="fs-1 fw-bold my-5 text-info text-uppercase">Log In</h2>
            <div class="row flex-lg-row-reverse align-items-center g-5">
                <div class="col-md-4 text-start d-none d-lg-block">
                    ffffffffffffff
                </div>
                <div class="col-md-8">
                    <form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="email" placeholder="Enter Your Email"  {...register("email", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Enter Your Password" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="password" placeholder="Enter Your Password"  {...register("password", { required: true })} />
                        </FloatingLabel>

                        <Button className='px-5 button border-0 bg-info w-100 mb-3'><i className="fas fa-shopping-cart me-3"></i>Log In</Button>
                        <Button className='px-5 button border-0 bg-info w-100 mb-3'><i className="fas fa-shopping-cart me-3"></i>Log In With Google</Button>

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
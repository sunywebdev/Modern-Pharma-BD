import React from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

    }
    return (
        <Container className='mt-5' id='news'>
            <h2 className="fs-1 fw-bold my-5 text-info text-uppercase">Contact Us</h2>
            <div class="row flex-lg-row-reverse align-items-center g-5">
                <div class="col-md-4 text-start d-none d-lg-block">
                    ffffffffffffff
                </div>
                <div class="col-md-8">
                    <form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Business Name" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="text" placeholder="Business Name"  {...register("businessName", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="text" placeholder="Mobile Number"  {...register("mobileNumber", { required: true })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 text-info">
                            <Form.Control className='border-info text-info' type="email" placeholder="Email"  {...register("email", { required: true })} />
                        </FloatingLabel>


                        <Link to='/' className='text-decoration-none'>
                            <Button className='px-5 button border-0 bg-info'><i className="fas fa-shopping-cart me-3"></i>Send Your Query</Button>
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

export default ContactUs;
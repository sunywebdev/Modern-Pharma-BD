import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <Container>
            <div class="row flex-lg-row-reverse align-items-center g-5">
                <div class="col-md-6 text-start">

                </div>
                <div class="col-md-6">

                </div>
                <Button className='my-4 '><Link to='/home' className='text-decoration-none text-light'>Back To Home</Link> </Button>
            </div>
        </Container>
    );
};

export default ContactUs;
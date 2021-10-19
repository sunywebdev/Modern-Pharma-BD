import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <div className="mx-auto py-5 my-5">
                <h2 className="fs-1 fw-bold my-5">
                    404 Not Found
                </h2>
            </div>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 bg-info border-info'>Back To Home</Button>
            </Link>
        </Container>
    );
};

export default NotFound;
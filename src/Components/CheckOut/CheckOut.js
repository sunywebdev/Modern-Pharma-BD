import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div>
            <h2 className="fs-1 fw-bold text-1 py-5 my-5">
                Thank's For Your Order
            </h2>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-1 border-11'><i className="fas fa-arrow-circle-left me-3"></i>Back To Home</Button>
            </Link>
        </div>
    );
};

export default CheckOut;
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import LoadDB from '../../LoadDB/LoadDB';

const NewsDetails = () => {
    const { itemID } = useParams()
    const [items] = LoadDB()
    return (
        <Container className='mt-2'>
            {items?.map(item => item?.id === itemID &&
                <>
                    <div className="row flex-lg-row-reverse align-items-center g-5">
                        <div className="col-md-6 text-start">
                            <div className="row">
                                <div className="col"><i className="fas fa-user-alt text-primary"></i> &nbsp; {item?.by}</div>
                                <div className="col"><i className="fas fa-calendar-alt text-primary"></i> &nbsp; {item?.time}</div>
                                <div className="col"><i className="fas fa-folder text-primary"></i> &nbsp; {item?.folder}</div>
                            </div>
                            <h2 className='fw-bold py-3'>{item?.headline}</h2>
                            <p className='text-secondary'>{item?.details}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={item?.photo} className="d-block mx-lg-auto img-fluid w-100" alt="" loading="lazy" />
                        </div>
                    </div>
                </>

            )}

            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-info border-info'>Back To Home</Button>
            </Link>
        </Container>
    );
};

export default NewsDetails;
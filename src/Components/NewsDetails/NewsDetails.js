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
                    <div class="row flex-lg-row-reverse align-items-center g-5">
                        <div class="col-md-6 text-start">
                            <div className="row">
                                <div className="col"><i class="fas fa-user-alt text-primary"></i> &nbsp; {item?.by}</div>
                            <div className="col"><i class="fas fa-calendar-alt text-primary"></i> &nbsp; {item?.time}</div>
                            <div className="col"><i class="fas fa-folder text-primary"></i> &nbsp; {item?.folder}</div>
                            </div>
                            <h2 className='fw-bold py-3'>{item?.headline}</h2>
                            <p className='text-secondary'>{item?.details}</p>
                        </div>
                        <div class="col-md-6">
                            <img src={item?.photo} class="d-block mx-lg-auto img-fluid w-100" alt="" loading="lazy" />
                        </div>
                    </div>
                    <Button className='my-4 bg-info border-info'><Link to='/home' className='text-decoration-none text-light'>Back To Home</Link> </Button>
                </>

            )}


        </Container>
    );
};

export default NewsDetails;
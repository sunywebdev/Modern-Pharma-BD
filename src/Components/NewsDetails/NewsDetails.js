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
                    <h2 className='fw-bold py-3 mt-2 text-info'>{item?.headline}</h2>
                    <div class="clearfix">
                        <img src={item?.photo} class="col-md-4 mb-2 mx-md-3 rounded float-sm-start w-50" alt="..." />
                        <div className="row gx-0 pb-3">
                            <div className="col"><i className="fas fa-user-alt text-primary"></i> &nbsp; {item?.by}</div>
                            <div className="col"><i className="fas fa-calendar-alt text-primary"></i> &nbsp; {item?.time}</div>
                            <div className="col"><i className="fas fa-folder text-primary"></i> &nbsp; {item?.folder}</div>
                        </div>
                        <p className='text-secondary text-start'>{item?.details}</p>
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
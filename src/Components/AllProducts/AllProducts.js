import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import LoadDB from '../../LoadDB/LoadDB';

const AllProducts = () => {
    const [items] = LoadDB()
    return (
        <Container className='pb-5'>
            <h2 className="fs-1 fw-bold mt-5 mb-4 text-1 text-uppercase">Our Products</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    items?.map(item => item?.section === 'products' &&
                        <Col>
                            <Card style={{ borderRadius: '19px' }} className='pCard border-0 bg-light'>
                                <Card.Img variant="top" className='w-75 mx-auto' src={item?.photo} style={{ borderRadius: '19px 19px 0 0' }} />
                                <Card.Body className="p-0">
                                    <Card.Title className='p-0 m-0 mt-2 fs-5 fw-bold text-1'>{item?.name}</Card.Title>
                                    <Card.Text>
                                        <p className='py-2 my-0 px-2'>{item?.details.slice(0, 70)}...</p>
                                        <h5 className='p-0 m-0 fw-bold'>$ {item?.price}</h5>
                                        <Rating className='fs-5 text-warning pt-2'
                                            emptySymbol="fa fa-star-o "
                                            fullSymbol="fa fa-star "
                                            initialRating={item?.rating}
                                            readonly
                                        />
                                    </Card.Text>

                                    <Link to={`/product/${item?.id}`} className='text-decoration-none text-light'>
                                        <Button className='w-100 fw-bold bg-1 border-11 py-2' style={{ borderRadius: ' 0 0 19px 19px' }}>View More </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )))}
            </Row>
        </Container >
    );
};


export default AllProducts;
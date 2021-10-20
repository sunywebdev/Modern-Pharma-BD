import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import LoadDB from '../../LoadDB/LoadDB';
import './Products.css'

const Products = () => {
    const [items] = LoadDB()
    return (
        <Container className='mt-5'>
            <h2 className="fs-1 fw-bold mt-5 text-1 mb-0 text-uppercase">Our Latest Products</h2>
            <p className='text-2 col-md-7 mx-auto mb-4 '>Modern Phanmacy BD is an online pharmacy that offers professional home delivery services for health care products, with a focus on quality and customer care.</p>
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

                                    <Link to={`/product/${item.id}`} className='text-decoration-none text-light'>
                                        <Button className='w-100 fw-bold bg-1 border-1 py-2' style={{ borderRadius: ' 0 0 19px 19px' }}>View More </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ).slice(0, 8)))}
            </Row>
            <Link to='/allproducts' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-1 border-1'>Browse More</Button>
            </Link>
        </Container >
    );
};

export default Products;
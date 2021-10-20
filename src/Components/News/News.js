import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadDB from '../../LoadDB/LoadDB';

const News = () => {
    const [items] = LoadDB()
    return (
        <Container className='my-5' id='news'>
            <h2 className="fs-1 fw-bold mt-5 text-1 mb-0 text-uppercase">News And Blogs</h2>
            <p className='text-2 col-md-7 mx-auto mb-4 '>Medical News and articles you can trust from around the world. All content is written and reviewed by qualified health, medical and scientific experts.</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    items?.map(item => item?.section === 'news' &&
                        <Col className='text-start'>
                            <Card style={{ borderRadius: '19px' }} className='pCard border-0 bg-light'>
                                <Card.Img variant="top" src={item?.photo} style={{ borderRadius: '19px 19px 0 0' }} />
                                <Card.Body>
                                    <p><i className="fas fa-calendar-alt text-1"></i> &nbsp; {item?.time}</p>
                                    <Card.Title className='fw-bold text-1'>{item?.headline}</Card.Title>
                                    <Card.Text>
                                        {item?.details.slice(0, 100)}...
                                    </Card.Text>
                                    <Link to={`/news/${item?.id}`} className='float-start text-1 '>Read More +</Link>
                                </Card.Body>

                            </Card>
                        </Col>
                    )))}
            </Row>
        </Container >
    );
};

export default News;
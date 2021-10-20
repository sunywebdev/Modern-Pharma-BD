import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LoadDB from '../../LoadDB/LoadDB';

const OurTeam = () => {
    const [items] = LoadDB()
    return (
        <Container className='mt-5'>
            <h2 className="fs-1 fw-bold mt-5 mb-4 text-info text-uppercase">Our Team</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    items?.map(item => item?.section === 'team' &&
                        <Col>
                        <Card style={{ borderRadius: '19px' }} className='pCard border-0  bg-light'>
                            <Card.Img variant="top" src={item?.photo} style={{ borderRadius: '19px 19px 0 0' }}/>
                                <Card.Body>
                                    <Card.Title>{item?.name}</Card.Title>
                                    <Card.Text>
                                        {item?.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    )))}
            </Row>
        </Container>
    );
};

export default OurTeam;
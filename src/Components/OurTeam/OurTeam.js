import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LoadDB from '../../LoadDB/LoadDB';

const OurTeam = () => {
    const [items] = LoadDB()
    return (
        <Container className='mt-5'>
            <h2 className="fs-1 fw-bold mt-5 text-1 mb-0 text-uppercase">Our Team</h2>
            <p className='text-2 col-md-7 mx-auto mb-4 '>Patients receive primary care from a doctor of internal medicine and a support team who specialize in the prevention and treatment of adult diseases.</p>
            <Row xs={1} md={2} lg={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    items?.map(item => item?.section === 'team' &&
                        <Col>
                            <Card style={{ borderRadius: '19px' }} className='pCard border-0  bg-light'>
                                <Card.Img variant="top" src={item?.photo} style={{ borderRadius: '19px 19px 0 0' }} />
                                <Card.Body>
                                    <Card.Title className="text-1 fw-bold">{item?.name}</Card.Title>
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
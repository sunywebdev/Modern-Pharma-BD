import React from 'react';
import { Container, Table } from 'react-bootstrap';

const LocationAndTime = () => {
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    return (
        <Container className='mt-5' id="getUs">
            <h2 className="fs-1 fw-bold mt-5 text-1 mb-0 text-uppercase">Get Us</h2>
            <p className='text-2 col-md-7 mx-auto mb-4 '>Modern Phanmacy BD offers products and services to help you lead a healthy, happy life. Visit our online pharmacy, shop now, or find a store near you.</p>
            <div className="row gx-4">
                <div className="col-md-6  py-3 text-light bg-1">
                    <Table className=' text-light py-5 fw-bold'>
                        <thead>
                            <tr>
                                <th>Open Hours</th>
                                <th><i className="fas fa-history"></i> {`${hours} : ${min} : ${sec}`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday – Saturday</td>
                                <td>09.00 am – 20.00 pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>10.00 am – 18.00 pm</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-6 py-3 text-light bg-2">
                    <h5 className="fw-bold">Emergency Cases</h5>
                    <h2 className="dw-bold">+84 (051) 909 26 00</h2>
                    <p>For us, there are no minor aspects, because a quality result always epends on trifles. Over the years of our activities.</p>
                </div>
                <div className="col-12 m-0 p-0 w-100">
                    <iframe style={{ width: '100%', minHeight: '300px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36029.44012705244!2d91.80844946749237!3d22.362655517454378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e1!3m2!1sen!2sbd!4v1634572185619!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" title="google map"></iframe>
                </div>
            </div>
        </Container>
    );
};

export default LocationAndTime;
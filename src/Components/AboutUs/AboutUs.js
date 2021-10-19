import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from './aboutus.webp'

const AboutUs = () => {
    return (
        <Container className='mt-5'>
            <h2 className="fs-1 fw-bold my-5 text-info text-uppercase">About Us</h2>
            <div className="row g-5">
                <div className="col-md-5 text-start">
                    <img src={image} alt="" className='w-100' />
                </div>
                <div className="col-md-7 text-start">
                    <h2>Who we are</h2>
                    <p> Bangladesh's most convenient online pharmacy, Bangladesh Ki Pharmacy, is brought to you by the Dadha & Company – one of Bangladesh’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines. At M.Pharma, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in Bangladesh. You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.</p>

                    <h2>What we do</h2>
                    <p>
                        Offer fast online access to medicines with convenient home delivery
                        At M.Pharma, we make a wide range of prescription medicines and other health products conveniently available all across Bangladesh. Even second and third tier cities and rural villages can now have access to the latest medicines. Since we also offer generic alternatives to most medicines, online buyers can expect significant savings.

                    </p>
                    <h2> CONVENIENCE</h2>
                    <p>
                        Heavy traffic, lack of parking, monsoons, shop closed, forgetfulness… these are some of the reasons that could lead to skipping of vital medications. Since taking medicines regularly is a critical component of managing chronic medical conditions, it’s best not to run out of essential medicines. Just log on to M.Pharma, place your order online and have your medicines delivered to you – without leaving the comfort of your home.

                        What’s more, with easy access to reliable drug information, you get to know all about your medicine at M.Pharma, and once you’re a Netmeds customer, you’ll get regular refill reminders, so you’ll never again come up short of medicines.
                    </p>


                    <h2> ONE-STOP SHOP</h2>
                    <p>
                        At M.Pharma, we not only provide you with a wide range of medicines listed under various categories, we also offer a wide choice of OTC products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products and surgical supplies.
                    </p>


                    <h2>TRUST</h2>
                    <p>
                        M.Pharma continues a legacy of 100 years of success in the pharmaceutical industry. We are committed to provide safe, reliable and affordable medicines as well as a customer service philosophy that is worthy of our valued customers’ loyalty. We offer a superior online shopping experience, which includes ease of navigation and absolute transactional security.
                    </p>

                </div>
            </div>
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-info border-info'>Back To Home</Button>
            </Link>
        </Container >
    );
};

export default AboutUs;
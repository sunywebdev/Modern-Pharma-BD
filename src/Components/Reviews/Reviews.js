import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadDB from '../../LoadDB/LoadDB';
import Rating from 'react-rating';

const Reviews = () => {
    const [items] = LoadDB()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 4000,
        cssEase: "linear",
        adaptiveHeight: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    adaptiveHeight: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    };
    return (
        <Container className='mt-5'>
            <h2 className="fs-1 fw-bold mt-5 mb-4 text-info text-uppercase">What Our Client’s Say</h2>

            <Slider {...settings}>
                {Array.from({ length: 5 }).map((_, idx) => (
                    <div class="mb-3 p-2 p-md-3">
                        <div className=" bg-light p-4 border border-2 border-secondary" style={{ borderRadius: '19px' }}>
                            <div class="d-flex justify-content-between align-items-center my-2">
                                <div>
                                    <img src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/01-1.png" alt="" />
                                </div>
                                <div class="rating">
                                    <Rating className='fs-5 text-warning'
                                        emptySymbol="fa fa-star-o "
                                        fullSymbol="fa fa-star "
                                        initialRating={5}
                                        readonly
                                    />
                                </div>
                            </div>
                            <div class="text-start">
                                <p>Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p
                                ><h4 className='text-info fw-bold'>Daisy Lana</h4>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container >
    );
};

export default Reviews;
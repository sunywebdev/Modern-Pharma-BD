import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import LoadDB from '../../LoadDB/LoadDB';

const Product = (props) => {
    const { itemID } = useParams()
    const [items] = LoadDB()
    return (
        <Container className='mt-2' id='products'>
            {items?.map(item => item?.id === itemID &&
                <>
                    <div className="row flex-lg-row-reverse align-items-center g-5">
                        <div className="col-md-6 text-start">
                            <h2 className="fs-1 fw-bold mt-5 mb-4 text-uppercase">{item?.name}</h2>
                            <p><Rating className='text-warning'
                                emptySymbol="fa fa-star-o "
                                fullSymbol="fa fa-star "
                                initialRating={item?.rating}
                                readonly
                            /> <span className='fw-bold'>({item?.rating} customer review)</span></p>
                            <h2 className='text-primary py-2'> <del className='text-danger'>$ {(item?.price) + (item?.price * 0.20)}</del>(-15%)  &nbsp; $ {item?.price}</h2>
                            <p className="mb-3 text-secondary">{item.details}</p>
                            <h5 className="fw-bold py-2 text-danger">Only {item?.stock} in stock - Order Now!</h5>
                            <p>
                                <i className="far fa-heart"></i> &nbsp; Add to Wishlist
                            </p>
                            <h6 className='fw-bold'>SKU : {item?.id}</h6>
                            <h5 className='fw-bold py-2'>Share: &nbsp;
                                <span className='text-warning'>
                                    <i className="fab fa-facebook-square fa-2x"></i>
                                    &nbsp; <i className="fab fa-twitter-square fa-2x"></i>
                                    &nbsp; <i className="fab fa-linkedin fa-2x"></i>
                                </span>
                            </h5>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Button onClick={() => {
                                    props.addToCart(item)
                                }} className="bg-danger bg-gradient border-danger px-5 rounded-pill">Add To Cart</Button>
                            </div>
                        </div><div className="col-md-6">
                            <img src={item?.photo} className="d-block mx-lg-auto img-fluid w-100" alt="" width="700" height="500" loading="lazy" />
                        </div>
                    </div>
                </>
            )}
            <Link to='/home' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-info border-info'>Back To Home</Button>
            </Link>
        </Container>

    );
};

export default Product;
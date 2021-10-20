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
        <Container className='mt-5' id='products'>
            {items?.map(item => item?.id === itemID &&
                <>
                    <div className="row flex-lg-row-reverse g-5">
                        <div className="col-md-6">
                            <img src={item?.photo} className="d-block mx-lg-auto img-fluid w-100" alt="" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-md-6 text-start">
                            <h2 className="fs-1 fw-bold">{item?.name}</h2>
                            <p><Rating className='text-warning'
                                emptySymbol="fa fa-star-o "
                                fullSymbol="fa fa-star "
                                initialRating={item?.rating}
                                readonly
                            /> <span className='fw-bold'>({item?.rating} customer review)</span></p>
                            <h2 className='text-1 py-2'> <del className='text-danger'>$ {(item?.price) + (item?.price * 0.20)}</del>(-15%)  &nbsp; $ {item?.price}</h2>
                            <p className="text-secondary mb-0">{item?.details}</p>
                            <h5 className="fw-bold py-2 text-danger">Only {item?.stock} in stock - Order Now!</h5>
                            <p>
                                <i className="far fa-heart"></i> &nbsp; Add to Wishlist
                            </p>
                            <h6 className='fw-bold'>SKU : {item?.id}</h6>
                            <h5 className='fw-bold py-2'>Share: &nbsp;
                                <span className='text-1'>
                                    <i className="fab fa-facebook-square fa-2x"></i>
                                    &nbsp; <i className="fab fa-twitter-square fa-2x"></i>
                                    &nbsp; <i className="fab fa-linkedin fa-2x"></i>
                                </span>
                            </h5>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Button onClick={() => {
                                    props.addToCart(item)
                                }} className="bg-1 border-11 px-5 rounded-pill">Add To Cart</Button>
                            </div>
                        </div>

                    </div>
                </>
            )}
            <Link to='/allproducts' className='text-decoration-none text-light'>
                <Button className='my-4 px-5 bg-1 border-11'><i className="fas fa-arrow-circle-left me-3"></i>Back To Product List</Button>
            </Link>
        </Container>

    );
};

export default Product;
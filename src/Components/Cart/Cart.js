import React, { useState } from 'react';
import { ListGroup, Col, Button, Table, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Cart = ({ cart, removeItem, subTotal, fee }) => {
    const [quantity, setQuantity] = useState(1)
    const pcs = quantity
    const total = subTotal * pcs
    const totalFee = fee
    const tax = total * 0.15
    const finalTotal = total + totalFee + tax

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

    }

    return (
        <div className='container mt-5'>
            <h2 className="fw-bold text-info mb-4">Cart</h2>
            {
                cart?.length > 0 ?
                    <div className="row gy-4">

                        <div className="col-md-6">
                            <>
                                {
                                    cart?.map(items =>
                                        <Col key={items.id} className="my-3 " style={{ maxWidth: "420px", margin: "0 auto", backgroundColor: "#F5F5F5" }}>
                                            <ListGroup horizontal className=" text-start rounded">
                                                <ListGroup.Item className="border-0" style={{ backgroundColor: "#F5F5F5" }}>
                                                    <img src={items?.photo} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "100px" }} /></ListGroup.Item>
                                                <ListGroup.Item className=" border-0" style={{ backgroundColor: "#F5F5F5" }}>
                                                    <h6 className="fw-bold">{items?.name}</h6>
                                                    <h4 className="text-info fw-bold">$ {items?.price}</h4>
                                                    <h6 className="text-info fw-bold">{quantity} Pcs</h6>
                                                    <small>Delevery Fee : <span className="fw-bold text-info">$ {items?.fee}</span></small>
                                                </ListGroup.Item>
                                                <ListGroup.Item className=" border-0" style={{ backgroundColor: "#F5F5F5" }}>

                                                </ListGroup.Item>
                                                <ListGroup.Item className="border-0 my-auto" style={{ backgroundColor: "#F5F5F5", cursor: 'pointer' }} >
                                                    <i onClick={() => removeItem(items)} className='fas fa-times fa-2x text-info'></i>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            <ListGroup>
                                                <ListGroup.Item className="border-0 py-0 my-0" style={{ backgroundColor: "#F5F5F5" }}>
                                                    <i onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="fas fa-minus-circle fa-2x text-info me-3"></i>
                                                    <span className='text-info fw-bold fs-2'>{quantity}</span>
                                                    <i onClick={() => setQuantity(quantity + 1)} className="fas fa-plus-circle fa-2x text-info ms-3"></i>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    )
                                }

                            </>

                            <div className="col-md-5 mx-auto">
                                <Table hover className='text-start table-transparent border-light mt-4 '>
                                    <thead>
                                    </thead>
                                    <tbody className='border-light'>
                                        <tr>
                                            <td className='fw-bold '>Total Items</td>
                                            <td>$ {cart.length}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Sub Total</td>
                                            <td>$ {total}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Delevery Fee</td>
                                            <td>$ {totalFee}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Tax</td>
                                            <td>$ {tax}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Total</td>
                                            <td>$ {finalTotal}</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <form className='col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                <FloatingLabel controlId="floatingInput" label="Business Name" className="mb-3 text-info">
                                    <Form.Control className='border-info text-info' type="text" placeholder="Business Name"  {...register("businessName", { required: true })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-3 text-info">
                                    <Form.Control className='border-info text-info' type="text" placeholder="Mobile Number"  {...register("mobileNumber", { required: true })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Flat/Floor" className="mb-3 text-info">
                                    <Form.Control className='border-info text-info' type="text" placeholder="Flat/Floor "  {...register("flatFloor", { required: true })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Road Name/No" className="mb-3 text-info">
                                    <Form.Control className='border-info text-info' type="text" placeholder="Road Name/No"  {...register("roadNameNo", { required: true })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Additional Instruction" className="mb-3 text-info">
                                    <Form.Control className='border-info text-info' type="text" placeholder="Additional Instruction"  {...register("additionalInstruction", { required: true })} />
                                </FloatingLabel>

                                <Link to='/Checkout' className='text-decoration-none'>
                                    <Button className='px-5 button border-0 bg-info mt-4 rounded-pill'><i className="fas fa-shopping-cart me-3"></i>Preceed To Checkout</Button>
                                </Link>
                            </form>

                        </div>
                    </div>
                    :
                    <>
                        <h2 className="my-5 fs-1 fw-bold text-info">Looks like You Didn't Added Anything In Your Cart</h2>
                        <Link to='/Home' className='text-decoration-none'>
                            <Button className='px-5 button border-0 bg-info mt-2 rounded-pill'>
                                <i className="fas fa-arrow-circle-left me-3"></i>Back To Home
                            </Button>
                        </Link>
                    </>
            }

        </div>
    );
};

export default Cart;
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import img from './banner-doc-img.png'
import bgImg from './banner-bg.jpg'

const Banner = () => {
    const bg = {
        backgroundImage: `url(./${bgImg})`,
        maxHeight: "85vh",
        backgroundPposition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
    }
    return (
        <div className="banner overflow-hidden" style={bg}>
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block">
                        <img src={img} className="d-block mx-lg-auto w-75" alt="" loading="lazy" />
                    </div>
                    <div className="col-lg-6 float-start text-start">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-1">Modern Pharma BD</h1>
                        <p className="lead">Bangladesh's most convenient online pharmacy, Bangladesh Pharmacy, is brought to you by the Dadha & Company – one of Bangladesh’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
                        <div className="row row-cols-auto gx-4 py-3">
                            <HashLink className="col text-decoration-none text-light" smooth to="/#getUs">
                                <Button className="bg-1  py-2 border-0 fw-bold px-5">Get Us  </Button>
                            </HashLink>
                            <HashLink className="col text-decoration-none text-light" smooth to="/#news">
                                <Button className="bg-2 py-2  border-0 fw-bold px-5">News And Blogs</Button>
                            </HashLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
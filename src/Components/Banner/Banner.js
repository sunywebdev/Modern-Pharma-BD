import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import img from './banner.png'

const Banner = () => {
    /*     const bg = {
            backgroundImage: `url("https://www.w3schools.com/howto/photographer.jpg")`,
            height: "50%",
            backgroundPposition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative"
        } */
    return (
        <div className="banner" /* style={bg} */>
            <div class="container col-xxl-8 px-4">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6 d-none d-lg-block">
                        <img src={img} class="d-block mx-lg-auto w-100" alt="" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 text-info">Modern Pharma BD</h1>
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <HashLink className="text-decoration-none text-light" smooth to="/#getUs">
                                <Button className="bg-info px-5 py-3 gap-3 border-0 fw-bold w-100">Get Us  </Button>
                            </HashLink>
                            <HashLink className="text-decoration-none text-light" smooth to="/#news">
                                <Button className="bg-info px-5 py-3 gap-3 border-0 fw-bold w-100">News And Blogs</Button>
                            </HashLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
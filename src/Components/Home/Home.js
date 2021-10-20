import React from 'react';
import Banner from '../Banner/Banner';
import LocationAndTime from '../LocationAndTime/LocationAndTime';
import News from '../News/News';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import bgImg from './bg-img.jpg'

const Home = () => {
    const bg = {
        backgroundImage: `url(./${bgImg})`,
        backgroundAttachment: "fixed"
    }
    return (

        <div style={bg}>
            <Banner></Banner>
            <Products></Products>
            <LocationAndTime></LocationAndTime>
            <OurTeam></OurTeam>
            <Reviews></Reviews>
            <News></News>
        </div>
    );
};

export default Home;
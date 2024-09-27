import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Homepage;
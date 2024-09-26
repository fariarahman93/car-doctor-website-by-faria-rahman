import React from 'react';
import Banner from './Banner';
import About from './About';

const Homepage = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Homepage;
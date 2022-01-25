import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurBlogs from '../Blogs/OurBlogs/OurBlogs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <OurBlogs />
        </div>
    );
};

export default Home;
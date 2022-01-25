import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurBlogs from '../Blogs/OurBlogs/OurBlogs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <OurBlogs />
            <Footer />
        </div>
    );
};

export default Home;
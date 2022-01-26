import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurBlogs from '../Blogs/OurBlogs/OurBlogs';
import Contact from '../Contact/Contact';

const Home = () => {
    useFirebase();
    return (
        <div id='home'>
            <Navigation />
            <Banner />
            <OurBlogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AlertMessage from '../../Shared/AlertMessage/AlertMessage';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurBlogs from '../Blogs/OurBlogs/OurBlogs';
import Contact from '../Contact/Contact';

const Home = () => {
    const { user } = useAuth();
    return (
        <div id='home'>
            <Navigation />
            <Banner />
            <OurBlogs />
            <Contact />
            <Footer />
            {user.email && <AlertMessage severity={'success'} message={'login successful'} />}
        </div>
    );
};

export default Home;
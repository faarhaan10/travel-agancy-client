import { Typography, Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import CardMedia from '@mui/material/CardMedia';


// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar"
import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, {
    Scrollbar, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Scrollbar]);

const Slider = () => {
    const images = [
        {
            id: 1,
            img: 'https://i.ibb.co/hc0qzbt/adventure.jpg',
            country: 'france',
            desc: 'The City of Love Love is the glue that binds'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/qmsXzh7/miami.jpg',
            country: 'us',
            desc: 'Coolest things to do in miami beaches 2022'
        },
        {
            id: 2,
            img: 'http://designcrazzy.com/demo/destination_wp/wp-content/uploads/2017/06/aerial-view-of-people-on-beach-4253835-2-scaled.jpg',
            country: 'us',
            desc: 'Dont think only Live Your Own Story'
        },
    ]
    return (
        <Box sx={{ height: { xs: '50vh', md: '90vh' } }}>
            <Swiper
                scrollbar={{
                    "hide": true
                }}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper" >


                {
                    images.map(image => <SwiperSlide
                        key={image.id}
                    >
                        <Box
                            sx={{
                                position: 'relative'
                            }}>
                            <img style={{
                                height: '100%',
                                width: '100%',
                                objectFit: { xs: 'cover', md: 'fill' }
                            }} src={image.img} alt='' />
                            <Box sx={{ position: 'absolute', top: '60%', left: '5%' }}>
                                <Typography
                                    sx={{ color: 'white', textTransform: 'uppercase', textAlign: 'start' }}
                                >
                                    {image.country}
                                </Typography>
                                <Typography component="div"
                                    sx={{ fontWeight: 'bold', color: 'white', fontSize: '2em' }}
                                >
                                    {image.desc}
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>)
                }

            </Swiper >
        </Box>
    );
};

export default Slider;
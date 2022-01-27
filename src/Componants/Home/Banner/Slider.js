import { Typography, Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";



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
    return (
        <Container maxWidth="xl" sx={{ height: '90vh' }}>
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


                <SwiperSlide>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundImage: "url(https://i.ibb.co/0FcLrjp/img3.jpg)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Travel Blogs
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundImage: "url(https://i.ibb.co/McNGjXW/img4.jpg)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Lifestyle Blogs
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundImage: "url(https://i.ibb.co/zhh3xGf/Beautiful-mountains-in-fog-and-standing-young-woman-with-backpack-on-the-peak-at-sunset-in-summer-La.jpg)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Personal Blogs
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundImage: "url(https://i.ibb.co/6r4P5p5/img2.jpg)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Vlogs
                        </Typography>
                    </Box>
                </SwiperSlide>
            </Swiper >
        </Container>
    );
};

export default Slider;
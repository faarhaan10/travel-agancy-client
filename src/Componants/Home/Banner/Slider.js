import { Typography, Box, Button } from '@mui/material';
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
        <Box sx={{ height: '100vh' }}>
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
                            backgroundImage: "url(https://i.ibb.co/C2nWz1m/image.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Testimonials1
                        </Typography>
                        <Button variant="contained">Contained</Button>
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
                            backgroundImage: "url(https://i.ibb.co/C2nWz1m/image.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Testimonials1
                        </Typography>
                        <Button variant="contained">Contained</Button>
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
                            backgroundImage: "url(https://i.ibb.co/C2nWz1m/image.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine', pb: 3 }}
                        >
                            Testimonials1
                        </Typography>
                        <Button variant="contained">Contained</Button>
                    </Box>
                </SwiperSlide>
            </Swiper >
        </Box>
    );
};

export default Slider;
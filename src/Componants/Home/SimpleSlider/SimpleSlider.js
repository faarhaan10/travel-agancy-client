import { Box, Grid, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useAuth from '../../../hooks/useAuth';

const SimpleSlider = () => {
    const [reviews, setReviews] = useState([]);
    const { databaseUrl } = useAuth();

    useEffect(() => {
        axios.get(`${databaseUrl}/reviews`)
            .then(res => {
                setReviews(res.data);
            })
    }, []);



    return (
        <div className="slide-container">
            <Slide>
                {
                    reviews.map(rvw => (
                        <div className="each-slide" key={rvw._id}>

                            <Box sx={{ textAlign: 'center' }}>
                                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={3}>
                                        <img style={{ width: 50 }} src="https://image3.jdomni.in/banner/19102021/7D/F4/62/E9946C86DDDB5AAFD1B8988C44_1634654061879.png" alt="" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="p"
                                        >{rvw.review}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img style={{ width: 50 }} src="https://image1.jdomni.in/banner/19102021/5B/D6/93/1553F840E787C5D56772D5CC48_1634654069665.png" alt="" />
                                    </Grid>
                                </Grid>
                                <Rating name="read-only" value={parseInt(rvw.rating)} readOnly />
                                <Typography variant="h6" gutterBottom component="div"
                                >
                                    {rvw.name}
                                </Typography>
                            </Box>
                        </div>
                    ))
                }

            </Slide>
        </div>
    );
};

export default SimpleSlider;

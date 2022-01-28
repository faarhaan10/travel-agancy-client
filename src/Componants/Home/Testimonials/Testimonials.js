import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Testimonials = () => {
    return (
        <Container id='testimonials' sx={{ my: 5, py: 5 }} data-aos='fade-up'>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div"
                    sx={{ pb: 3 }}
                >
                    Testimonials
                </Typography>
            </Box>
            <SimpleSlider />
        </Container>
    );
};

export default Testimonials;
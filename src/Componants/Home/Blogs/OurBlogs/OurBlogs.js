import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Blogs from '../Blogs/Blogs';
import TopBlog from '../TopBlogs/TopBlogs';

const OurBlogs = () => {
    return (
        <Container maxWidth='xl' id='blogs'>
            <Typography variant="h5" component="div"
                sx={{ py: 3, color: 'red', fontWeight: 'bold', textDecoration: 'underline' }}
            >
                Our Blogs
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    <Blogs />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TopBlog />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurBlogs;
import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import Blogs from '../Blogs/Blogs';
import TopBlog from '../TopBlogs/TopBlogs';
import useAuth from '../../../../hooks/useAuth'

const OurBlogs = () => {
    const { compare } = useAuth();
    return (
        <Container maxWidth='xl' id='blogs' sx={{ pt: 7, position: 'relative' }}>
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
            {compare.length && <Box sx={{
                width: '300px',
                height: '350px',
                position: 'absolute',
                right: '2%',
                top: '5%',
                backgroundColor: 'red'
            }}>
                <Typography variant="h5" component="div"
                    sx={{ p: 3, fontWeight: 'bold' }}
                >
                    comparision: {compare.length}

                </Typography>
            </Box>}
        </Container>
    );
};

export default OurBlogs;
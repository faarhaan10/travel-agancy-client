import React from 'react';
import { Typography, Grid } from '@mui/material';
import BlogCard from './BlogCard';


const TopBlogs = () => {
    return (
        <div>
            <Typography variant="h5" component="div"
                sx={{ pt: 3, color: 'red', fontWeight: 'bold', textDecoration: 'underline' }}
            >
                Top Rated Blogs:
            </Typography>
            <Grid container spacing={2}>
                {Array.from(Array(3)).map((_, index) => (
                    <BlogCard />
                ))}
            </Grid>

        </div>
    );
};

export default TopBlogs;
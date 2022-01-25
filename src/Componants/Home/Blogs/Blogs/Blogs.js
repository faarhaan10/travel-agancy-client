import React from 'react';
import { Grid, Typography, Pagination, Box } from '@mui/material';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div>
            <Typography variant="h3" component="div"
                sx={{ color: 'crimson', fontWeight: 'bold' }}
            >
                Blogs
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(10)).map((_, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        <Blog />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={10} color="primary" sx={{ py: 3 }} />
        </div>
    );
};

export default Blogs;
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Pagination } from '@mui/material';
import axios from "axios";
import Blog from '../Blog/Blog';
import useAuth from '../../../../hooks/useAuth';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const { databaseUrl } = useAuth();

    useEffect(() => {
        axios.get(`${databaseUrl}/blogs`)
            .then(res => setBlogs(res.data))
            .catch()
    }, []);

    return (
        <div>
            <Typography variant="h3" component="div"
                sx={{ fontWeight: 'bold' }}
            >
                Blogs
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {blogs.map(blog => (
                    <Grid item xs={4} sm={4} md={4} key={blog._id}>
                        <Blog blog={blog} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={10} color="primary" sx={{ py: 3 }} />
        </div>
    );
};

export default Blogs;
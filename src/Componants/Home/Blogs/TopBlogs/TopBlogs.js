import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import BlogCard from './BlogCard';
import axios from "axios";
import useAuth from '../../../../hooks/useAuth';

const TopBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const { databaseUrl } = useAuth();

    useEffect(() => {
        axios.get(`${databaseUrl}/blogs/top`)
            .then(res => setBlogs(res.data))
            .catch()
    }, []);

    return (
        <div>
            <Typography variant="h5" component="div"
                sx={{ pt: 3, color: 'red', fontWeight: 'bold', textDecoration: 'underline' }}
            >
                Top Rated Blogs:
            </Typography>
            <Grid container spacing={2}>
                {blogs.map(blog => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </Grid>

        </div>
    );
};

export default TopBlogs;
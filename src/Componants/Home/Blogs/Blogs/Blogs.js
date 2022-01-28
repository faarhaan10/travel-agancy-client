import React, { useEffect, useState } from 'react';
import { Grid, Typography, Pagination } from '@mui/material';
import axios from "axios";
import Blog from '../Blog/Blog';
import useAuth from '../../../../hooks/useAuth';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlogs, setNewBlogs] = useState([]);
    const { databaseUrl } = useAuth();
    const [page, setPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0);
    const size = 10;

    useEffect(() => {
        axios.get(`${databaseUrl}/blogs?page=${page}&&size=${size}`)
            .then(res => {
                setBlogs(res.data.result);
                setNewBlogs(res.data.result);
                setPageCount(res.data.count);
            })
            .catch()
    }, [page]);

    const handlePage = (event, value) => {
        setPage(value - 1);
    };
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
            <Pagination
                count={Math.ceil(pageCount / 10)}
                color="primary"
                sx={{ py: 3 }}
                onChange={handlePage}
            />
        </div>
    );
};

export default Blogs;
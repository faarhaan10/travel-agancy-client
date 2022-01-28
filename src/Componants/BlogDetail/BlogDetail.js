import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Grid, Container, Stack, Rating } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';


const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    const { databaseUrl } = useAuth();
    const { blogID } = useParams();

    useEffect(() => {
        axios.get(`${databaseUrl}/blogs/${blogID}`)
            .then(res => setBlog(res.data))
            .catch()
    }, [blogID]);
    const { blogTitle, blogImage, postDate, description, date, location, duration, rating, cost, catagory } = blog;

    const imgFit = {
        height: '420px',
        objectFit: 'contain'
    };

    return (
        <>
            <Navigation />
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} >
                        <Typography variant="h4" component="div"
                            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                        >
                            {blogTitle}
                        </Typography>
                        <img style={imgFit} src={blogImage} alt={blogTitle} />
                        <Typography variant="h6" component="div">
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Posted Date:
                            </Typography>
                            {postDate}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mt: 5 }}>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Posted by:
                            </Typography>
                            <Typography variant="h6" component="span">
                                {blog.blogPoster || 'unknown'}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Date:
                            </Typography>
                            <Typography variant="h6" component="span">
                                {date}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Location:
                            </Typography>
                            <Typography variant="h6" component="span">
                                {location}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Duration:
                            </Typography>
                            <Typography variant="h6" component="span">
                                {duration} Days
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Rating:
                            </Typography>
                            <Rating name="read-only" value={parseInt(rating)} readOnly />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Category:
                            </Typography>
                            <Typography variant="h6" component="span">
                                {catagory}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Total Cost:
                            </Typography>
                            <Typography variant="h6" component="span">
                                ${cost}/package
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default BlogDetail;
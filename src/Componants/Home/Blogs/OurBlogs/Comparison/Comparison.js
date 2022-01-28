import React from 'react';
import { Button, Stack, Typography, Container, Box, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const Comparison = () => {
    const { compare, setCompare } = useAuth();
    const handleClose = id => {
        const newBlogs = compare.filter(blog => blog._id !== id);
        setCompare(newBlogs);

    }

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 99, backgroundColor: 'rgba(0, 0, 0, 0.9)', py: 5 }}
            elevation={3}
            data-aos='fade-up'
        >
            <Container >
                <Box>
                    <Typography variant="h4" component="div"
                        sx={{ textAlign: 'center', pb: 3, color: 'cornsilk' }}
                    >
                        Compare Blogs
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Grid item></Grid>
                            <Grid container spacing={2} >
                                {
                                    compare.map(blog => <Grid item>
                                        <Button
                                            key={blog._id}
                                            variant="contained"
                                            color="info"
                                            data-aos='fade-up'
                                            onClick={() => handleClose(blog._id)}
                                        >
                                            {blog.blogTitle}❌
                                        </Button>
                                    </Grid>)
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                                {compare.length > 1 && <Link to='/compare' style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        data-aos='fade-up'
                                    >
                                        Compare
                                    </Button>
                                </Link>}
                                <Button
                                    variant="contained"
                                    color="error"
                                    data-aos='fade-up'
                                    onClick={() => setCompare([])}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </Paper>
    );
};

export default Comparison;
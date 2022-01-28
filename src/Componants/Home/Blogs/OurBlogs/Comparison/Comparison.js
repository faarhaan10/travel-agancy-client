import React from 'react';
import { Button, Stack, Typography, Container, Box, Paper, Grid } from '@mui/material';
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
                <Box sx={{ height: '20vh' }}>
                    <Typography variant="h4" component="div"
                        sx={{ textAlign: 'center', pb: 3, color: 'cornsilk' }}
                    >
                        Compare Blogs
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'start' }} >
                                {
                                    compare.map(blog => <Button
                                        key={blog._id}
                                        variant="contained"
                                        color="info"
                                        data-aos='fade-up'
                                        onClick={() => handleClose(blog._id)}
                                    >
                                        {blog.blogTitle}❌
                                    </Button>
                                    )
                                }
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                                {compare.length > 1 && <Button
                                    variant="contained"
                                    color="success"
                                    data-aos='fade-up'
                                >
                                    Compare
                                </Button>}
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
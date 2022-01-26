import React from 'react';
import { Typography, Grid, Container, Stack, Rating } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';


const BlogDetail = () => {
    const imgFit = {
        height: '420px',
        objectFit: 'contain'
    };

    return (
        <>
            <Navigation />
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} >
                        <Typography variant="h4" component="div"
                            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                        >
                            Log in
                        </Typography>
                        <img style={imgFit} src="https://media.nomadicmatt.com/2021/grandcanyon2.jpg" alt="" />
                        <Typography variant="h6" component="div">
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Posted:
                            </Typography>
                            12/21/2021
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae dignissimos quos cum ipsam rerum aliquid illo commodi velit quibusdam!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ mt: 5 }}>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Posted by:
                            </Typography>
                            <Typography variant="h6" component="span">
                                Admin
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Date Posted:
                            </Typography>
                            <Typography variant="h6" component="span">
                                1212:
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Location:
                            </Typography>
                            <Typography variant="h6" component="span">
                                1212:
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Duration:
                            </Typography>
                            <Typography variant="h6" component="span">
                                1212:
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Rating:
                            </Typography>
                            <Rating name="read-only" value={4} readOnly />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6" component="span"
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                            >
                                Total Cost:
                            </Typography>
                            <Typography variant="h6" component="span">
                                $1212
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default BlogDetail;
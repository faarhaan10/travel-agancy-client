import React from 'react';
import { Grid, Stack, Typography, Box, Button, Container, TextField } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#171717' }}>
            <Container>
                <Box sx={{ textAlign: 'center', p: 3, my: 5 }}>
                    <Typography variant="h3" component="div"
                    >
                        Subscribe to us!
                    </Typography>
                    <TextField
                        sx={{ mr: 2 }}
                        size='small'
                        variant="outlined"
                        label='Enter your email' />
                    <Button variant="contained">Contained</Button>

                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h2" component="div"
                                sx={{ color: 'gold' }}
                            >
                                Travel Agancy
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                mb: 5, fontFamily: 'Tangerine', color: 'white', mt: -2
                                , fontSize: '.8rem'
                            }}>FEEL FRESH, LOOK BEAUTY
                            </Typography>
                            <Button color="secondary">@_rizasparlour</Button>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 4, md: 12 }}>

                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500', color: 'white' }}>
                                        Information
                                    </Typography>
                                    <Stack sx={{ alignItems: 'start' }}>
                                        <Button color="secondary" display="block">About us          </Button>
                                        <Button color="secondary">          Contact us</Button>
                                        <Button color="secondary">Privacy Policy</Button>
                                        <Button color="secondary">Appointment Details</Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500', color: 'white' }}>
                                        Support
                                    </Typography>
                                    <Stack sx={{ alignItems: 'start' }}>
                                        <Button color="secondary" display="block">News</Button>
                                        <Button color="secondary">Contact</Button>
                                        <Button color="secondary">Mail Support</Button>
                                        <Button color="secondary">Chat Support</Button>
                                    </Stack>

                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500', color: 'white' }}>
                                        Help
                                    </Typography>
                                    <Stack sx={{ alignItems: 'start' }}>
                                        <Button color="secondary" >FAQ</Button>
                                        <Button color="secondary">Catalog</Button>
                                        <Button color="secondary">Search</Button>
                                        <Button color="secondary">Wishlist</Button>
                                    </Stack>

                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500', color: 'white' }}>
                                        About
                                    </Typography>
                                    <Button color="secondary">Terms of Service</Button>
                                    <Button color="secondary">Terms and Condition</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
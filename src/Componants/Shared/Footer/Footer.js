import React from 'react';
import { Grid, Stack, Typography, Box, Button, Container, TextField } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#171717' }}>
            <Container>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h2" component="div"
                                sx={{ color: 'white' }}
                            >
                                Travel Hero
                            </Typography>
                            <Button color="secondary">@_travelhero</Button>
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
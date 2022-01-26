import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        alert('Thanks for contacting us!')
    };

    return (
        <Container id='contact' sx={{ mt: 5, pt: 8 }} data-aos='fade-up'>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div"
                    sx={{ fontFamily: 'Tangerine' }}
                >
                    Contact US
                </Typography>
            </Box>
            <Grid container columns={{ xs: 6, md: 6 }} sx={{ alignItems: 'center' }}>
                <Grid item xs={6} md={3}>
                    <Box sx={{ p: { xs: 0, md: 10 } }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                id="name"
                                variant="standard"
                                sx={{ mb: 2 }}
                                {...register("name", { required: true })}
                            />
                            <TextField
                                fullWidth
                                label="Email ID"
                                id="email"
                                variant="standard"
                                sx={{ mb: 2 }}
                                {...register("email", { required: true })}
                            />
                            <TextField
                                fullWidth
                                label="Mobile"
                                id="mobile"
                                variant="standard"
                                sx={{ mb: 2 }}
                                {...register("phn", { required: true })}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                id="message"
                                variant="standard"
                                sx={{ mb: 3 }}
                                {...register("message", { required: true })}
                            />
                            <Button
                                fullWidth variant="contained" className='btnColor'
                                type='submit'
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 5 }}>
                            <img style={{ width: 40, height: 40 }} src="https://i.ibb.co/0JnzcLB/location.png" alt="location" />
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div"
                            >
                                Our Office Address
                            </Typography>
                            <Typography component="p"
                            >Mirpur 10, Dhaka, Bangladesh
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 5 }}>
                            <img style={{ width: 40, height: 40 }} src="https://i.ibb.co/zhqZTW1/message.png" alt="message" />
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div"
                            >
                                General Enquiries
                            </Typography>
                            <Typography component="p"
                            >contact@rizasparlour.com
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 5 }}>
                            <img style={{ width: 40, height: 40 }} src="https://i.ibb.co/M9611V1/dial.png" alt="dial" />
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div"
                            >
                                Call us
                            </Typography>
                            <Typography component="p"
                            >+880-12000-55-321
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 5 }}>
                            <img style={{ width: 40, height: 40 }} src="https://i.ibb.co/3hW3KXy/clock.png" alt="clock" />
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div"
                            >
                                Our Timing
                            </Typography>
                            <Typography component="p"
                            >Mon - Sun : 09:00 AM - 09:00 PM
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Contact;
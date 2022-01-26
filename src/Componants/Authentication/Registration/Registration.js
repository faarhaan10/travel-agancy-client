import React from 'react';
import { Button, Chip, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { handleCreateUser, error, handleGoogleLogin, handleToast } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        handleCreateUser(data.name, data.email, data.password, navigate);
    };

    if (error) {
        handleToast('error', error);
    }
    return (
        <>
            <Box sx={{ height: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#ddd' }}>
                <Container maxWidth="sm" sx={{ p: 5, borderRadius: { xs: 0, md: 8 }, boxShadow: '0 0 11px rgb(0 0 0 / 30%)', backgroundColor: '#fff' }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={4} >
                            <Typography variant="h4" gutterBottom component="div"

                            >
                                Please fill up this form
                            </Typography>
                            <hr />
                            <Typography variant="body1" gutterBottom>
                                We do not share your personal details with anyone
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ borderLeft: { xs: 0, md: '1px solid gray' }, py: 3 }}>
                            <Box>
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
                                        label="Email"
                                        id="email"
                                        variant="standard"
                                        sx={{ mb: 2 }}
                                        {...register("email", { required: true })}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        id="password"
                                        variant="standard"
                                        sx={{ mb: 3 }}
                                        {...register("password", { required: true })}
                                    />
                                    <Button
                                        fullWidth variant="contained" className='btnColor'
                                        type='submit'
                                    >
                                        Register
                                    </Button>
                                </form>
                            </Box>

                            <Divider>
                                <Chip label="OR " />
                            </Divider>
                            <Button fullWidth variant="contained" className='btnColor'
                            >
                                Sign in with google
                            </Button>
                            <Link to="/login">
                                <Button fullWidth variant="text">
                                    Existing user? Log in
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    {/* {error && <Alert severity="error">{error}</Alert>} */}
                </Container>

            </Box></>
    );
};

export default Registration;
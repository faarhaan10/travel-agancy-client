import React from 'react';
import { Button, Container, TextField, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const Verification = () => {
    const { user, handleLogOut, handleVarify, isSent, handleToast } = useAuth();
    const navigate = useNavigate();
    if (isSent) {
        handleToast('success', 'Varification link sent!');
    }
    return (
        <Box sx={{ height: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#ddd' }}>
            <Container maxWidth="sm" sx={{ p: 5, borderRadius: { xs: 0, md: 8 }, boxShadow: '0 0 11px rgb(0 0 0 / 30%)', backgroundColor: '#fff' }}>
                {user.displayName && <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="div"
                    >
                        Travel Hero
                    </Typography>
                    <hr />
                    <Typography variant="body1">
                        Hey! {user.displayName}
                    </Typography>
                    <Typography variant="body1">
                        Nice to meet you!
                    </Typography>
                    <Typography variant="body1">
                        Please check your inbox to make sure it's you.
                    </Typography>
                    <TextField
                        variant="outlined"
                        type='text'
                        defaultValue={user.email}
                        size='small'
                        sx={{ width: '90%' }}
                    />
                    <Stack direction="row" sx={{ justifyContent: 'center', mt: 1 }} spacing={2}>
                        <Button
                            variant="contained" color='warning'
                            onClick={handleLogOut}
                        >Sign out</Button>

                        <Button
                            variant="contained"
                            color='success'
                            onClick={() => handleVarify(navigate)}
                        > Verify</Button>

                    </Stack>
                </Box>}
            </Container>

        </Box>
    );
};

export default Verification;
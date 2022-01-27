import React from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { databaseUrl, handleToast } = useAuth();

    const onSubmit = data => {
        axios.put(`${databaseUrl}/users/admin`, data)
            .then(res => {
                if (res.data.acknowledged) {
                    handleToast('success', 'Admin added Succesfully');
                }
            });
        reset();
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ flexGrow: 1 }}
        >
            <Container sx={{
                fontWeight: 500,
                fontSize: { md: 40, sm: 30, xs: 25 },
                py: 3
            }}>
                <Typography
                    variant="h3"
                    component="div"

                    sx={{
                        fontSize: { md: 40, sm: 30, xs: 25 },
                        mb: 5
                    }}
                >
                    Make Admin
                </Typography>
                <Stack sx={{ flexDirection: 'row', mx: 'auto' }}>
                    <TextField
                        label="Email"
                        size="small"
                        id="fullWidth"
                        sx={{ mr: 2 }}
                        type="email"
                        {...register("email", { required: true })}
                    />

                    <Button type='submit' color='warning' variant="contained" endIcon={<SaveIcon />}>
                        Save
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default MakeAdmin;
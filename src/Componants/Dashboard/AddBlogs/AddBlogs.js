import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'orange',
        },
        '&:hover fieldset': {
            borderColor: 'hotpink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const AddBlogs = () => {
    const [blogImage, setBlogImage] = React.useState('');
    const [catagory, setCatagory] = React.useState('');
    // const [status, setStatus] = React.useState(false);

    const { databaseUrl, handleToast, uploadImage, admin, user } = useAuth();
    const { register, handleSubmit, reset } = useForm();


    let status = admin;
    const onSubmit = data => {
        const postDate = new Date(Date.now()).toLocaleString().split(',')[0];
        const newData = { blogImage, catagory, postDate, status, ...data };
        console.log(newData)
        axios.post(`${databaseUrl}/blogs`, newData)
            .then(res => {
                if (res.data.acknowledged) {
                    handleToast('success', 'Blog added successfully!');
                    reset();
                    setBlogImage('');
                    setCatagory('');
                }
            })

    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setBlogImage(res.data.data.url);
            })
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 5 }}
        >

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Blogger"
                        defaultValue={user.displayName}
                        InputProps={{
                            readOnly: true,
                        }}
                        type='text'
                        {...register("blogPoster", { required: true })} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Blogger Email"
                        defaultValue={user.email}
                        InputProps={{
                            readOnly: true,
                        }}
                        type='text'
                        {...register("bloggerEmail", { required: true })} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Blog Title"
                        type='text'
                        {...register("blogTitle", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Location"
                        type='text'
                        {...register("location", { required: true })} />
                </Grid>


                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Rating"
                        type='number'
                        defaultValue='3'
                        {...register("rating", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Cost"
                        type='number'
                        {...register("cost", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Traveler Info"
                        type='text'
                        {...register("travelerInfo", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        type='date'
                        {...register("date", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Travel Duration"
                        type='number'
                        {...register("duration", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Description"
                        type='text'
                        {...register("description", { required: true })} />
                </Grid>


                <Grid item xs={4} sm={4} md={4} >
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                        <Select
                            value={catagory}
                            label="Catagory"
                            onChange={e => setCatagory(e.target.value)}
                        >
                            <MenuItem value={'Travel blog'}>Travel blog</MenuItem>
                            <MenuItem value={'Food blog'}>Food blog</MenuItem>
                            <MenuItem value={'Lifestyle blog'}>Lifestyle blog</MenuItem>
                            <MenuItem value={'Personal blogs'}>Personal blog</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        type="file"
                        onChange={e => handleImgUpload(e.target.files[0])} />
                </Grid>

            </Grid>
            {blogImage ? <Button color="warning" variant="contained" sx={{ mt: 2 }} type='submit' >Add Service</Button>
                :
                <Button color="warning" disabled variant="contained" sx={{ mt: 2 }} type='submit' >Add Service</Button>}
        </Box>
    );
};

export default AddBlogs;
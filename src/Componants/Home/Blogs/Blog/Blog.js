import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Paper, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const Blog = ({ blog }) => {

    const { _id, blogImage, blogTitle, description } = blog;
    const { compare, setCompare, handleToast } = useAuth();

    const handleCompare = obj => {
        if (compare.length === 5) {
            handleToast('warning', 'You can compare maximum 5');
            return;
        }
        if (compare.includes(obj)) {
            handleToast('warning', 'Already added');
            return;
        }

        const newComparion = [...compare, obj];
        setCompare(newComparion);
    };


    return (
        <Paper elevation={4} data-aos='fade-up'>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={blogImage}
                        alt={blogTitle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blogTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0, 100)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => handleCompare(blog)}>
                        Compare
                    </Button>
                    <Link to={`/details/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button size="small" >Learn more</Button>
                    </Link>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default Blog;
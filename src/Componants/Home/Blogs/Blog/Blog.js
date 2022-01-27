import React from 'react';
import { Typography, Card, Paper, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@mui/material';

const Blog = ({ blog }) => {

    const { blogImage, blogTitle, description } = blog;
    return (
        <Paper elevation={4} >
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
                    <Button size="small" color="primary">
                        Compair
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default Blog;
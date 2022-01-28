import React from 'react';
import { Typography, Card, Paper, CardMedia, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const BlogCard = ({ blog }) => {
    const { _id, blogImage, location, rating, description, cost, blogTitle } = blog;
    return (
        <Grid item xs={12} data-aos='fade-up'>
            <Paper elevation={4} >
                <Card>
                    <CardMedia
                        component="img"
                        alt={blogTitle}
                        height="140"
                        image={blogImage}
                    />
                    <CardContent>
                        <Stack direction="row" sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Chip
                                label={`🧭${location}`}
                                sx={{ backgroundColor: '#bfd4fc', color: 'blue' }} />
                            <Chip
                                label={`⭐${parseInt(rating)}`}
                                sx={{ backgroundColor: '#edf4c9' }} />
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            {description.slice(0, 140)}...
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant="button" display="block" >
                            💵${cost}
                        </Typography>
                        <Link to={`/details/${_id}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" variant="contained">Learn more</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
};

export default BlogCard;
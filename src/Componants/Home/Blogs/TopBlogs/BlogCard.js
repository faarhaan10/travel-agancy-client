import React from 'react';
import { Typography, Card, Paper, CardMedia, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material';

const BlogCard = () => {
    return (
        <Grid item xs={12}>
            <Paper elevation={4} >
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Stack direction="row" sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Chip
                                label="Africa"
                                sx={{ backgroundColor: '#bfd4fc', color: 'blue' }} />
                            <Chip
                                label="⭐4.7"
                                sx={{ backgroundColor: '#edf4c9' }} />
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant="button" display="block" >
                            $342
                        </Typography>
                        <Button size="small" variant="contained">Book Now</Button>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
};

export default BlogCard;
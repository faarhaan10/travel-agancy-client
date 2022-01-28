import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, Rating } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Compare = () => {
    const { compare } = useAuth();

    return (
        <div>
            <Navigation />
            <Container>
                <Paper sx={{ width: '100%', overflow: 'hidden', mt: 5 }}>
                    <Typography variant="h5" component="div"
                        sx={{ fontWeight: 'bold', textAlign: 'center' }}
                    >
                        Compare {compare.length} blogs
                    </Typography>
                    <TableContainer sx={{ maxHeight: 500 }}>
                        <Table stickyHeader aria-label="sticky table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Blog Title
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Rating
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Location
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Duration
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Transportation
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        Expense
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    compare.map(blog => <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        data-aos='fade-up'
                                        key={blog._id}
                                    >
                                        <TableCell >
                                            {blog.blogTitle}
                                        </TableCell>
                                        <TableCell >
                                            <Rating size="small" value={parseInt(blog.rating)} readOnly />
                                        </TableCell>
                                        <TableCell >
                                            {blog.location}
                                        </TableCell>
                                        <TableCell >
                                            {blog.duration} Days
                                        </TableCell>
                                        <TableCell >
                                            Yes
                                        </TableCell>
                                        <TableCell >
                                            ${blog.cost}
                                        </TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </Container>
        </div>
    );
};

export default Compare;
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Chip, Typography, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';






const ManageBlogs = () => {
    const [blogs, setBlogs] = React.useState([]);
    const { databaseUrl } = useAuth();

    // load all services 
    React.useEffect(() => {
        axios.get(`${databaseUrl}/blogs/all`)
            .then(res => {
                setBlogs(res.data);
            })
    }, []);
    console.log(blogs)

    // Product delete handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {

            axios.delete(`${databaseUrl}/services/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Product deleted Succesfully');
                        const restProducts = blogs.filter(product => product._id !== id);
                        setBlogs(restProducts);
                    }
                });
        }
    };



    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 5 }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Blog Title
                            </TableCell>
                            <TableCell>
                                Blogger
                            </TableCell>
                            <TableCell>
                                Blogger Email
                            </TableCell>
                            <TableCell>
                                Location
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell>
                                Manage
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            blogs.map(blog => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={blog._id}
                            >
                                <TableCell >
                                    {blogs.indexOf(blog) + 1}
                                </TableCell>
                                <TableCell >
                                    {blog.blogTitle}
                                </TableCell>
                                <TableCell >
                                    {blog?.blogPoster || 'annonymous'}
                                </TableCell>
                                <TableCell >
                                    {blog?.bloggerEmail || 'annonymous'}
                                </TableCell>
                                <TableCell >
                                    {blog.location}
                                </TableCell>
                                <TableCell >
                                    {blog.status ? <Chip
                                        label='approved'
                                        sx={{ backgroundColor: 'lime', color: 'white' }} />
                                        :
                                        <Chip
                                            label='pending'
                                            sx={{ backgroundColor: 'red', color: 'white' }} />}
                                </TableCell>
                                <TableCell >
                                    <Link to={`/details/`} style={{ textDecoration: 'none' }}>
                                        <Button size="small" variant="contained">EDIT</Button>
                                    </Link>
                                </TableCell>

                            </TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>

            {!blogs.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No Blogs
            </Typography>
            }
        </Paper >
    );
};

export default ManageBlogs;  
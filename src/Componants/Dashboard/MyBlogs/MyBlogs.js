import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chip, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const MyBlogs = () => {
    const [blogs, setBlogs] = React.useState([]);
    const { user, databaseUrl } = useAuth();

    // load logged in users data 
    React.useEffect(() => {
        axios.get(`${databaseUrl}/blogs/all`)
            .then(res => setBlogs(res.data))
    }, [user.email]);


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
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
                                Post Time
                            </TableCell>
                            <TableCell>
                                Category
                            </TableCell>
                            <TableCell>
                                Location
                            </TableCell>
                            <TableCell>
                                Status
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
                                    {blog.postDate}
                                </TableCell>
                                <TableCell >
                                    {blog.catagory}
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

                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!blogs.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No Blogs
            </Typography>}
        </Paper >
    );
};

export default MyBlogs;
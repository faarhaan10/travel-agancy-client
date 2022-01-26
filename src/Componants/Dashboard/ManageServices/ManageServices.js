import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { IconButton, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';






const ManageServices = () => {
    const [services, setServices] = React.useState([]);
    const { databaseUrl } = useAuth();

    // load all services 
    React.useEffect(() => {
        axios.get(`${databaseUrl}/services`)
            .then(res => {
                setServices(res.data);
            })
    }, []);


    // Product delete handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {

            axios.delete(`${databaseUrl}/services/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Product deleted Succesfully');
                        const restProducts = services.filter(product => product._id !== id);
                        setServices(restProducts);
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
                                Title
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Rating
                            </TableCell>
                            <TableCell>
                                Stock
                            </TableCell>
                            <TableCell>
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            services.map(service => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={service._id}
                            >
                                <TableCell >
                                    {services.indexOf(service) + 1}
                                </TableCell>
                                <TableCell >
                                    {service.serviceTitle}
                                </TableCell>
                                <TableCell >
                                    ${service.price}
                                </TableCell>
                                <TableCell >
                                    {service.rating}
                                </TableCell>
                                <TableCell >
                                    In Stock
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={() => handleDelete(service._id)} aria-label="delete">
                                        <DeleteIcon color='warning' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>

            {!services.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No orders
            </Typography>
            }
        </Paper >
    );
};

export default ManageServices;  
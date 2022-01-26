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
import CheckIcon from '@mui/icons-material/Check';
import useAuth from '../../../hooks/useAuth';

const ManageAppointments = () => {
    const [orders, setOrders] = React.useState([]);
    const { databaseUrl } = useAuth();


    // load all orders 
    React.useEffect(() => {
        axios.get(`${databaseUrl}/appointments`)
            .then(res => {
                setOrders(res.data);
            })
    }, []);


    // order delete handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to cancel this appoionment?');
        if (proceed) {
            axios.delete(`${databaseUrl}/appointments/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Appointment Cancelled Succesfully');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                });
        }
    };

    const handleAccept = (id, status) => {
        if (status !== 'accepted') {
            const newStatus = { status: 'accepted' };
            axios.put(`${databaseUrl}/appointments/${id}`, newStatus)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Appointment accepted Succesfully');
                    }

                })
        }
        else {
            alert('Already accepted')
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
                                Customer
                            </TableCell>
                            <TableCell>
                                Mobile
                            </TableCell>
                            <TableCell>
                                Service
                            </TableCell>
                            <TableCell>
                                Time
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell>
                                Update/Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={order._id}
                            >
                                <TableCell >
                                    {orders.indexOf(order) + 1}
                                </TableCell>
                                <TableCell >
                                    {order.userName}
                                </TableCell>
                                <TableCell >
                                    {order.phn}
                                </TableCell>
                                <TableCell >
                                    {order.service}
                                </TableCell>
                                <TableCell >
                                    {order.date}
                                </TableCell>
                                <TableCell >
                                    {order.status}
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={() => handleAccept(order._id, order.status)} aria-label="delete">
                                        <CheckIcon color='warning' />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(order._id)} aria-label="delete">
                                        <DeleteIcon color='warning' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>

            {!orders.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No orders
            </Typography>
            }
        </Paper >
    );
};

export default ManageAppointments;
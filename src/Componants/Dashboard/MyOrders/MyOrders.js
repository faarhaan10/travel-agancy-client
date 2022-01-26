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

const MyOrders = () => {
    const [orders, setOrders] = React.useState([]);
    const { user, databaseUrl } = useAuth();

    // load logged in users data 
    React.useEffect(() => {
        axios.get(`${databaseUrl}/appointments/?email=${user.email}`)
            .then(res => setOrders(res.data))
    }, [user.email]);


    // cancel appointment handler
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
    }

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
                                Service Name
                            </TableCell>
                            <TableCell>
                                Service Time
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell>
                                Cancel
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
                                    {order.service}
                                </TableCell>
                                <TableCell >
                                    {order.date}
                                </TableCell>
                                <TableCell >
                                    {order.status}
                                </TableCell>
                                <TableCell >
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
                No Appointments
            </Typography>}
        </Paper >
    );
};

export default MyOrders;
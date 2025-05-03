import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Box
} from '@mui/material';
import {
  Visibility as ViewIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

const Orders = () => {
  const orders = [
    {
      id: 1,
      customer: "John Doe",
      date: "2024-01-15",
      total: 299.99,
      status: "Pending",
      items: 3
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-01-14",
      total: 199.99,
      status: "Delivered",
      items: 2
    },
    {
      id: 3,
      customer: "Mike Johnson",
      date: "2024-01-13",
      total: 499.99,
      status: "Processing",
      items: 4
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Delivered': return 'success';
      case 'Processing': return 'info';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Orders Management</Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>
                  <Chip 
                    label={order.status} 
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box>
                    <IconButton size="small" color="primary">
                      <ViewIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
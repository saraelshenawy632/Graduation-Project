import React from 'react';
import { 
  Container, Grid, Paper, Typography, Box, 
  List, ListItem, ListItemText, ListItemIcon,
  Button, Card, CardContent 
} from '@mui/material';
import {
  ShoppingCart as OrderIcon,
  People as UserIcon,
  Inventory as ProductIcon,
  AttachMoney as RevenueIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const navigate = useNavigate();
  const products = useSelector(state => state.products.items);

  const stats = {
    totalProducts: products.length,
    totalOrders: 25,
    totalUsers: 150,
    totalRevenue: 15999.99
  };

  const recentOrders = [
    { id: 1, customer: "John Doe", total: 299.99, status: "Pending" },
    { id: 2, customer: "Jane Smith", total: 199.99, status: "Delivered" },
    { id: 3, customer: "Mike Johnson", total: 499.99, status: "Processing" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'primary.light' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ProductIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Products</Typography>
              </Box>
              <Typography variant="h4">{stats.totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'secondary.light' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <OrderIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Orders</Typography>
              </Box>
              <Typography variant="h4">{stats.totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'success.light' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <UserIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Users</Typography>
              </Box>
              <Typography variant="h4">{stats.totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'warning.light' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <RevenueIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Revenue</Typography>
              </Box>
              <Typography variant="h4">${stats.totalRevenue}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Quick Actions</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                onClick={() => navigate('/admin/products')}
              >
                Manage Products
              </Button>
              <Button 
                variant="contained" 
                onClick={() => navigate('/admin/orders')}
              >
                View Orders
              </Button>
              <Button variant="contained">Add New Product</Button>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Recent Orders</Typography>
            <List>
              {recentOrders.map((order) => (
                <ListItem key={order.id} divider>
                  <ListItemIcon>
                    <OrderIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={order.customer}
                    secondary={`$${order.total} - ${order.status}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
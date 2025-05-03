import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, Typography, Box, Button, Grid, Paper,
  IconButton, Divider, TextField, Alert,
  Tooltip, Card, CardContent
} from '@mui/material';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  Favorite as FavorioriteIcon,
  LocalShipping as ShippingIcon
} from '@mui/icons-material';
import { removeFromCart, clearCart, updateQuantity } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const items = cart?.items || [];
  const total = cart?.total || 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ productId: item.id, quantity: newQuantity }));
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const shipping = total > 100 ? 0 : 10;
  const tax = total * 0.05;
  const finalTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Card sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Your cart is empty</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Looks like you haven't added anything to your cart yet.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {items.map((item) => (
            <Paper 
              key={item.id} 
              sx={{ 
                p: 2, 
                mb: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      maxHeight: 120,
                      objectFit: 'contain'
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" gutterBottom>{item.name}</Typography>
                  <Typography sx={{ color: '#000000', fontWeight: 700, fontSize: '1.1rem' }} gutterBottom>
                    ${item.price.toFixed(2)} each
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton 
                      size="small"
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      size="small"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value)) handleQuantityChange(item, value);
                      }}
                      inputProps={{ 
                        min: 1,
                        style: { textAlign: 'center', width: '50px' }
                      }}
                    />
                    <IconButton 
                      size="small"
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ color: '#000000', fontWeight: 800, fontSize: '1.2rem' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Remove from cart">
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Save for later">
                      <IconButton color="primary">
                        <FavorioriteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>Subtotal:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" sx={{ color: '#000000', fontWeight: 700, fontSize: '1.1rem' }}>
                    ${calculateSubtotal().toFixed(2)}
                  </Typography>
                </Grid>
                
                <Grid item xs={6}>
                  <Typography>Shipping:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" sx={{ color: '#000000', fontWeight: 700, fontSize: '1.1rem' }}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>Tax (5%):</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" sx={{ color: '#000000', fontWeight: 700, fontSize: '1.1rem' }}>
                    ${tax.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mb: 3 }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6">Total:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ color: '#000000', fontWeight: 800, fontSize: '1.3rem' }} align="right">
                    ${finalTotal.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {shipping > 0 && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShippingIcon />
                  <Typography variant="body2">
                    Add ${(100 - total).toFixed(2)} more for free shipping!
                  </Typography>
                </Box>
              </Alert>
            )}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={() => navigate('/checkout')}
              sx={{ mb: 2 }}
            >
              Proceed to Checkout
            </Button>
            
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;

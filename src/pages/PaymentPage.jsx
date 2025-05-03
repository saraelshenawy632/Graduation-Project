import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  TextField
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log('Processing payment...');
    navigate('/confirmation');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Payment Details
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Card Number"
                margin="normal"
                required
              />
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Expiry Date"
                    placeholder="MM/YY"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    type="password"
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Cardholder Name"
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3 }}
              >
                Pay ${total.toFixed(2)}
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Order Total
            </Typography>
            <Typography variant="h4">
              ${total.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import FeaturedProducts from '../components/FeaturedProducts';
import { useSelector } from 'react-redux';
import { selectFeaturedProducts } from '../features/productsSlice';

const Home = () => {
  const featuredProducts = useSelector(selectFeaturedProducts);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4
          }}
        >
          Welcome to Aura Store
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Discover our curated collection of premium products
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4
          }}
        >
          Featured Products
        </Typography>
        <FeaturedProducts products={featuredProducts} />
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4
          }}
        >
          Why Choose Aura Store?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Premium Quality
              </Typography>
              <Typography color="text.secondary">
                We source only the finest products to ensure your satisfaction
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Fast Shipping
              </Typography>
              <Typography color="text.secondary">
                Get your products delivered quickly and securely
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Excellent Support
              </Typography>
              <Typography color="text.secondary">
                Our team is always here to help with any questions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
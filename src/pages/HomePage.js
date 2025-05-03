import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  // Initialize with empty array as fallback
  const products = useSelector(state => state.products?.items || []);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;

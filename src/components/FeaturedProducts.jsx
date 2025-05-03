import React from 'react';
import { Grid, Typography, Box, Rating, Chip } from '@mui/material';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box sx={{ position: 'relative' }}>
              <ProductCard product={product} />
              <Box sx={{ 
                position: 'absolute', 
                top: 8, 
                right: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}>
                <Chip 
                  label="Featured" 
                  color="primary" 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(25, 118, 210, 0.9)',
                    color: 'white'
                  }}
                />
                <Box sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  p: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}>
                  <Rating value={product.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="caption" color="text.secondary">
                    ({product.reviews})
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts; 
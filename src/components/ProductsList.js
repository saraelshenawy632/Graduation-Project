// Remove the Box import if it's not being used
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductsList = ({ products = [] }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
import React from 'react';
import { Box, TextField, Slider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../features/productsSlice';

const ProductFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="Search Products"
        value={filters.search}
        onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
        sx={{ mb: 2 }}
      />
      
      <Box sx={{ mb: 2 }}>
        <InputLabel>Price Range</InputLabel>
        <Slider
          value={filters.priceRange}
          onChange={(e, newValue) => dispatch(setFilters({ priceRange: newValue }))}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
        />
      </Box>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category}
          onChange={(e) => dispatch(setFilters({ category: e.target.value }))}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductFilters;
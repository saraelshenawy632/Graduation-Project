import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Container, Typography, Box, Grid, TextField, 
  ToggleButton, ToggleButtonGroup, Card, CardMedia, 
  CardContent, CardActions, Button 
} from '@mui/material';
import { setFilters, selectFilteredProducts } from '../features/productsSlice';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/products';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';
import { addToCart } from '../features/cartSlice';
import { selectFeaturedProducts } from '../features/productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const featuredProducts = useSelector(selectFeaturedProducts);
  const filteredProducts = useSelector(selectFilteredProducts);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
      dispatch(setFilters({ category: newCategory }));
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(setFilters({ searchTerm: value }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Add Featured Products section at the top */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? '#fff' : '#111',
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <StarIcon sx={{ color: 'gold', mr: 1 }} />
                    <Typography variant="body2">Featured</Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleAddToCart(product)}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Existing filters and product grid */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Products"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ToggleButtonGroup
                value={selectedCategory}
                exclusive
                onChange={handleCategoryChange}
                aria-label="product categories"
              >
                {categories.map((category) => (
                  <ToggleButton
                    key={category.id}
                    value={category.id}
                    sx={{ textTransform: 'none' }}
                  >
                    {category.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" color="text.secondary" align="center">
              No products found matching your criteria.
            </Typography>
          </Grid>
        ) : (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Products;
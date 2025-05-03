import React, { useState } from 'react';
import { 
  Container, Grid, Card, CardMedia, CardContent, 
  Typography, CardActions, Button, TextField, Box 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    image: 'https://placeholder.com/300x200',
    category: 'Electronics'
  },
  // Add more products here
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Search Products"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  variant="contained" 
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
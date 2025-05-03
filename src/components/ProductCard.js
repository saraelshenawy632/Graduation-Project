import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grow,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 8,
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography color="text.secondary">
            {product.description.substring(0, 100)}...
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Grow in={isHovered} timeout={300}>
            <Button 
              size="small" 
              color="primary" 
              onClick={handleAddToCart}
              variant={isHovered ? "contained" : "text"}
              fullWidth
            >
              Add to Cart
            </Button>
          </Grow>
          <Button 
            size="small" 
            color="primary"
            onClick={() => setOpenDialog(true)}
          >
            View Details
          </Button>
        </CardActions>
      </Card>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
          <Typography variant="h6" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
              handleAddToCart();
              setOpenDialog(false);
            }}
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;

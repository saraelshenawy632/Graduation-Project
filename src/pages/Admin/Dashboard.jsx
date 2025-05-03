// Dashboard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';  // Fixed import path with correct relative path
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Dashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: ''
  });
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
    };
    // Dispatch addToCart action to add product to the cart
    dispatch(addToCart(product));
    setOpenDialog(false);
    setNewProduct({ name: '', price: '', stock: '' });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpenDialog(true)}>
        Add Product
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddProduct} variant="contained">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;

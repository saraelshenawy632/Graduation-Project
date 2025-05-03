import React, { useState } from 'react';
import {
  Container, Grid, Paper, Typography, Button, TextField,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from '../../features/productsSlice';

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const [open, setOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    featured: false
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({ ...productData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (editProduct) {
      dispatch(updateProduct({ ...productData, id: editProduct.id }));
    } else {
      dispatch(addProduct({ ...productData, id: Date.now() }));
    }
    setOpen(false);
    resetForm();
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setProductData(product);
    setOpen(true);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const resetForm = () => {
    setProductData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: '',
      featured: false
    });
    setEditProduct(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Products Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => {
                resetForm();
                setOpen(true);
              }}
            >
              Add New Product
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Featured</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img src={product.image} alt={product.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.featured ? 'Yes' : 'No'}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(product)} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(product.id)} color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                value={productData.name}
                onChange={(e) => setProductData({ ...productData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={productData.price}
                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={productData.description}
                onChange={(e) => setProductData({ ...productData, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                value={productData.category}
                onChange={(e) => setProductData({ ...productData, category: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                type="file"
                onChange={handleImageUpload}
                style={{ marginTop: '10px' }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editProduct ? 'Update' : 'Add'} Product
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminProducts;
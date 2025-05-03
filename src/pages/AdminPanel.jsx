import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
  Box,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Snackbar
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const LOCAL_KEY = 'admin_products';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [formProduct, setFormProduct] = useState({ name: '', price: '', description: '', image: '', id: null });
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddOrEdit = (e) => {
    e.preventDefault();
    if (!formProduct.name || !formProduct.price) return;

    if (isEditing) {
      setProducts(products.map(p =>
        p.id === formProduct.id ? { ...formProduct, price: Number(formProduct.price) } : p
      ));
      setIsEditing(false);
    } else {
      setProducts([
        ...products,
        { id: Date.now(), name: formProduct.name, price: Number(formProduct.price) }
      ]);
    }

    setFormProduct({ name: '', price: '', id: null });
  };

  const handleDelete = (id) => {
    setProductToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete));
    setDeleteConfirmOpen(false);
    setSnackbar({ open: true, message: 'Product deleted successfully', severity: 'success' });
  };

  const handleEdit = (product) => {
    setFormProduct({
      ...product,
      description: product.description || '',
      image: product.image || ''
    });
    setIsEditing(true);
    setSnackbar({ open: true, message: 'Edit mode activated', severity: 'info' });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mb: 4,
          borderRadius: 2,
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      ></Paper>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography 
            variant="h4" 
            color="primary"
            sx={{ 
              fontWeight: 'bold',
              borderBottom: '3px solid',
              borderColor: 'primary.main',
              pb: 1
            }}
          >
            Admin Panel
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ ml: 2 }}
          >
            {products.length} Products
          </Typography>
        </Box>

        <Paper component="form" onSubmit={handleAddOrEdit} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              name="name"
              label="Product Name"
              value={formProduct.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              name="price"
              type="number"
              label="Price"
              value={formProduct.price}
              onChange={handleInputChange}
              required
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                type="submit"
                variant="contained"
                startIcon={isEditing ? <SaveIcon /> : null}
                fullWidth
              >
                {isEditing ? 'Update' : 'Add'}
              </Button>
              {isEditing && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsEditing(false);
                    setFormProduct({ name: '', price: '', id: null });
                  }}
                  startIcon={<CancelIcon />}
                >
                  Cancel
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <List>
          {products.length === 0 ? (
            <ListItem>
              <Typography color="text.secondary">
                No products available. Add some products to get started.
              </Typography>
            </ListItem>
          ) : (
            products.map(prod => (
              <ListItem
                key={prod.id}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  py: 2,
                  '&:last-child': {
                    borderBottom: 'none'
                  }
                }}
                secondaryAction={
                  <Box>
                    <IconButton 
                      onClick={() => handleEdit(prod)} 
                      color="primary"
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      onClick={() => handleDelete(prod.id)} 
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
              >
                <Typography>
                  <strong>{prod.name}</strong> - ${prod.price.toFixed(2)}
                </Typography>
              </ListItem>
            ))
          )}
        </List>
      </Paper>

      <Dialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this product?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AdminPanel;
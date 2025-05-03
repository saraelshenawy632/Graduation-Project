import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  items: products,
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    searchTerm: ''
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: Date.now(), // Generate a unique ID
        featured: false // Default to not featured
      };
      state.items.push(newProduct);
    },
    updateProduct: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.items.findIndex(product => product.id === id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...updatedFields
        };
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    }
  }
});

// Selectors
export const selectProducts = (state) => state.products.items;
export const selectFilters = (state) => state.products.filters;
export const selectFilteredProducts = (state) => {
  const { items } = state.products;
  const { category, priceRange, searchTerm } = state.products.filters;
  
  return items.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });
};

export const selectFeaturedProducts = (state) => 
  state.products.items.filter(product => product.featured);

export const { setFilters, addProduct, updateProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
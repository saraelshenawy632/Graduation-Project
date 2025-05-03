import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage if available
const loadCartFromStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [], total: 0 };
  } catch (error) {
    console.error('Error loading cart from storage:', error);
    return { items: [], total: 0 };
  }
};

const initialState = {
  items: [],
  total: 0,
  ...loadCartFromStorage()
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ 
          ...action.payload, 
          quantity: 1,
          price: Number(action.payload.price) // Ensure price is a number
        });
      }
      state.total = calculateTotal(state.items);
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.quantity = Math.max(1, quantity); // Ensure minimum quantity of 1
        state.total = calculateTotal(state.items);
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      // Clear from localStorage
      localStorage.removeItem('cart');
    }
  }
});

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items || [];
export const selectCartTotal = (state) => state.cart.total || 0;

export default cartSlice.reducer;

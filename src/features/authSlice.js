import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      console.log('Auth Slice - Login Success Payload:', action.payload);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        ...action.payload.user,
        role: action.payload.user.role || 'user', // Default to 'user' if role not provided
        image: action.payload.user.image || null,
        name: action.payload.user.name || 'User'
      };
      state.token = action.payload.token;
      console.log('Auth Slice - Updated State:', state);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      console.log('Auth Slice - Register Success Payload:', action.payload);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        ...action.payload.user,
        role: action.payload.user.role || 'user', // Default to 'user' if role not provided
        image: action.payload.user.image || null,
        name: action.payload.user.name || 'User'
      };
      state.token = action.payload.token;
      console.log('Auth Slice - Updated State:', state);
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    setUserRole: (state, action) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
          image: action.payload.image || state.user.image,
          name: action.payload.name || state.user.name
        };
      }
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  clearError,
  setUserRole,
  updateProfile
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
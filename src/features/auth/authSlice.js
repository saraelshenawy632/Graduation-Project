import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    role: null, // تخزين الدور للمستخدم إذا كان موجودًا
  },
  reducers: {
    // عند تسجيل الدخول
    login: (state, action) => {
      const { user } = action.payload; // تأكد من إرسال بيانات المستخدم
      state.isAuthenticated = true;
      state.user = user;
      state.role = user?.role || null; // إذا لم يكن الدور موجودًا، سيكون null
    },
    // عند تسجيل الخروج
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

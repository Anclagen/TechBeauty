import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchingProducts(state) {
      state.isLoading = true;
      state.isError = false;
    },
    fetchFailed(state) {
      state.isLoading = false;
      state.isError = true;
    }, 
    fetchedProducts(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
  },
});

export const { fetchingProducts, fetchedProducts, fetchFailed } = productsSlice.actions;

export default productsSlice.reducer;
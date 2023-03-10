import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalItems: 0,
  total: 0
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.product;
      const existingProduct = state.products.find(item => item.id === product.id);
        if (!existingProduct) {
          const newProduct = { ...product, quantity: action.payload.quantity };
          state.products = [...state.products, newProduct];
        } else {
          existingProduct.quantity += action.payload.quantity;
        }
        state.totalItems =  state.products.reduce((sum, {quantity}) =>{ return sum + (quantity)}, 0)
        state.total = state.products.reduce((sum, {quantity, discountedPrice}) =>{ return sum + (quantity * discountedPrice)}, 0)
    },
    removeFromCart: (state, action) => {
      const product = action.payload.product;
      state.products = state.products.filter(item => item.id !== product.id);
      state.totalItems =  state.products.reduce((sum, {quantity}) =>{ return sum + (quantity)}, 0)
      state.total = state.products.reduce((sum, {quantity, discountedPrice}) =>{ return sum + (quantity * discountedPrice)}, 0)
    },
    decreaseQuantity: (state, action) =>{
      const product = action.payload.product;
      const existingProduct = state.products.find(item => item.id === product.id);
      if(existingProduct){
        existingProduct.quantity = existingProduct.quantity - action.payload.quantity;
        if(existingProduct.quantity <= 0){
          state.products = state.products.filter(item => item.id !== product.id);
        }
      }
      state.totalItems =  state.products.reduce((sum, {quantity}) =>{ return sum + (quantity)}, 0)
      state.total = state.products.reduce((sum, {quantity, discountedPrice}) =>{ return sum + (quantity * discountedPrice)}, 0)
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0
      state.totalItems = 0
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
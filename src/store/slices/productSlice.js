import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: "59.99",
        count: "12",
        url: "https://example.com/images/headphones.jpg",
        description: "Comfortable wireless headphones with noise cancellation.",
      },
      {
        id: 2,
        name: "Gaming Keyboard",
        price: "89.00",
        count: "7",
        url: "https://example.com/images/keyboard.jpg",
        description: "Mechanical RGB-backlit keyboard perfect for gaming.",
      },
      {
        id: 3,
        name: "Smartwatch",
        price: "129.50",
        count: "5",
        url: "https://example.com/images/smartwatch.jpg",
        description: "Waterproof smartwatch with heart-rate tracking.",
      },
    ],
    changingProduct: null,
  },
  reducers: {
    addProduct: (state, action) => {
      {
        state.products.push({ ...action.payload, id: Date.now() });
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    editProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? { ...action.payload } : product
      );
    },
    setChangingProduct: (state, action) => {
      state.changingProduct = action.payload;
    },
    clearChangingProduct: (state) => {
      state.changingProduct = null;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  editProduct,
  setChangingProduct,
  clearChangingProduct,
} = productSlice.actions;
export default productSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer from "../products/productsSlice";
import filteredProductsReducer from "../filteredProducts/filteredProductsSlice"
import { useDispatch } from "react-redux";

// creates store
export const store = configureStore({
  // reducers that give access to their slice state
  reducer: {
    fetchProducts: fetchProductsReducer,
    filteredProducts: filteredProductsReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;

// RootState that gives access to slices
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

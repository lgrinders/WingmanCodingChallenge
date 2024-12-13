import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// state
interface FetchedProducts {
  value: any[];
}

// initial state
const initialState: FetchedProducts = {
  value: [],
};

// fetchedProductsSlice
const fetchedProductsSlice = createSlice({
  name: "fetchedProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, () => {
        console.log("fetchProdcuts.pending");
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

// AsyncThunk for fetching original products
export const fetchProductsAsync = createAsyncThunk(
  "fetchProducts/async",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

// reducer so that the state can be used globaly
export default fetchedProductsSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilteredProducts {
  value: any[]; // holds the filtered list
  allProducts: any[]; // stores all products for reference
  currentCategory: string; // value will be from DropDownSelector
  searchTerm: string; // value will be from SearchBar
}



// initial states
const initialState: FilteredProducts = {
  value: [],
  allProducts: [],
  currentCategory: "",
  searchTerm: "",
};

// action for checking if product matches search and category
const applyFilters = (state: FilteredProducts) => {
  const { allProducts, currentCategory, searchTerm} = state;
  state.value = allProducts.filter((product) => {
    const matchesCategory = !currentCategory || product.category === currentCategory;
    const matchesSearch = !searchTerm || product.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  })
}


const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {
    // sets FilteredProducts to products
    setFilteredProducts: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload; // set initial products
      state.allProducts = action.payload; // keep original for reference
    },
    // filters products based on selected category
    categoryProducts: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
      applyFilters(state);
    },

    // filters products based on user input
    filterProducts: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload.toLowerCase();
      applyFilters(state);
    },
  },
});

export const { setFilteredProducts, filterProducts, categoryProducts } =
  filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;

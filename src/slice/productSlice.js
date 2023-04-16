import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "phones/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/jsonstore/phones"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
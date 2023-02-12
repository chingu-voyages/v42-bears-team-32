import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
  error: "",
};

export const fetchSingleFood = createAsyncThunk(
  "food/fetchSingleFood",
  (id) => {
    return axios
      .get(`http://localhost:8000/api/v1/foods/${id}`)
      .then((response) => response.data);
  }
);

const singleFoodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleFood.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleFood.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSingleFood.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default singleFoodSlice.reducer;

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchFoods = createAsyncThunk("food/fetchFoods", () => {
  return axios
    .get("https://food-app-api-gypb.onrender.com/api/v1/foods")
    .then((response) => response.data);
});
export const fetchSingleFood = createAsyncThunk(
  "food/fetchSingleFood",
  (id) => {
    return axios
      .get(`https://food-app-api-gypb.onrender.com/api/v1/foods/${id}`)
      .then((response) => response.data);
  }
);
const foodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
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

export default foodSlice.reducer;

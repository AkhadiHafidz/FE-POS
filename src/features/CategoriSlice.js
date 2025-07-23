import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../auth/AxiosConfig.jsx";

let reqOptionsGetAll = {
  url: "/api/category",
  method: "GET",
};

export const getAllcategory = createAsyncThunk(
  "category/getAllcategory",
  async () => {
    try {
      const response = await axiosInstance(reqOptionsGetAll);
      return response.data.result;
    } catch (error) {
      const data = JSON.parse(error.request.response);
      throw new Error(data ? data.message : error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllcategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

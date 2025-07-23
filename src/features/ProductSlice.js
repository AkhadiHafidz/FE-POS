import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../auth/AxiosConfig.jsx";

export const getAllproduct = createAsyncThunk(
  "product/getAllproduct",
  async (keyword) => {
    let reqOptionsGetAll = {
      url: `/api/product?search_query=${keyword}&limit=250`,
      method: "GET",
    };
    try {
      const response = await axiosInstance.request(reqOptionsGetAll);
      return response.data.result;
    } catch (error) {
      const data = JSON.parse(error.request.response);
      throw new Error(data ? data.message : error.message);
    }
  }
);

export const getAllBycategory = createAsyncThunk(
  "product/getAllBycategory",
  async (id) => {
    let reqOptions = {
      url: `/api/product/category/${id}`,
      method: "GET",
    };
    try {
      const response = await axiosInstance.request(reqOptions);
      return response.data.result;
    } catch (error) {
      const data = JSON.parse(error.request.response);
      throw new Error(data ? data.message : error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // get by category
      .addCase(getAllBycategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBycategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllBycategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

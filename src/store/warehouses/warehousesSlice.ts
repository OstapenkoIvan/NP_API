import { createSlice } from "@reduxjs/toolkit";
import {
  getWarehouseQuery,
  getWarehouseNext,
  fetchWarehouses,
} from "./warehousesThunks";
import { IInitialWhState } from "../../types/np.types";

export const warehousesInitialState: IInitialWhState = {
  data: [],
  total: 0,
  isLoading: "idle",
  error: null,
};

const warehousesSlice = createSlice({
  name: "warehouses",
  initialState: warehousesInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouses.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(fetchWarehouses.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.total = payload.count;
        state.isLoading = "succeeded";
        state.error = null;
      })
      .addCase(fetchWarehouses.rejected, (state, { payload }) => {
        state.isLoading = "failed";
        state.error = payload as string;
      });
    builder
      .addCase(getWarehouseQuery.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(getWarehouseQuery.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.total = payload.count;
        state.isLoading = "succeeded";
        state.error = null;
      })
      .addCase(getWarehouseQuery.rejected, (state, { payload }) => {
        state.isLoading = "failed";
        state.error = payload as string;
      });
    builder
      .addCase(getWarehouseNext.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(getWarehouseNext.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload.data];
        state.total = payload.count;
        state.isLoading = "succeeded";
        state.error = null;
      })
      .addCase(getWarehouseNext.rejected, (state, { payload }) => {
        state.isLoading = "failed";
        state.error = payload as string;
      });
  },
});

export const warehousesReducer = warehousesSlice.reducer;

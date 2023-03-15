import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWhState } from "../../types/np.types";

const BASE_URL = "https://np-api-be-ostapenkoivan.vercel.app/api/warehouses";

export const getWarehouseQuery = createAsyncThunk(
  "warehouses/getWarehouseQuery",
  async (searchQuery: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{ data: IWhState[]; count: number }>(
        BASE_URL,
        searchQuery
      );

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

export const getWarehouseNext = createAsyncThunk(
  "warehouses/getWarehouseNext",
  async (searchQuery: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{ data: IWhState[]; count: number }>(
        BASE_URL,
        searchQuery
      );

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

export const fetchWarehouses = createAsyncThunk(
  "warehouses/fetchWarehouses",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<{ data: IWhState[]; count: number }>(
        BASE_URL
      );

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

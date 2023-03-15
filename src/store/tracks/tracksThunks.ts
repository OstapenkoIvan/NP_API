import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITracksState } from "../../types/np.types";

const BASE_URL = "https://np-api-be-ostapenkoivan.vercel.app/api/tracking";

export const addTrack = createAsyncThunk(
  "tracks/addTrack",
  async (searchQuery: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{ data: ITracksState }>(
        BASE_URL,
        searchQuery
      );

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

export const fetchTracks = createAsyncThunk(
  "tracks/fetchTracks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<{ data: ITracksState[] }>(BASE_URL);

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

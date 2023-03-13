import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITracksState } from "../../types/np.types";

const BASE_URL = "http://localhost:3000/api/tracking";

export const addTrack = createAsyncThunk(
  "tracks/addTrack",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{ data: ITracksState }>(
        BASE_URL,
        searchQuery
      );
      console.log("post response", data);

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

export const fetchTracks = createAsyncThunk(
  "tracks/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<{ data: ITracksState[] }>(BASE_URL);
      console.log("get response", data);

      return data;
    } catch (e) {
      return rejectWithValue(e as string);
    }
  }
);

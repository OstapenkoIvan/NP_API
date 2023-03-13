import { createSlice } from "@reduxjs/toolkit";
import { fetchTracks, addTrack } from "./tracksThunks";
import { IInitialTracksState } from "./../../types/np.types";

export const tracksInitialState: IInitialTracksState = {
  data: [],
  isLoading: "idle",
  error: null,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState: tracksInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(fetchTracks.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.isLoading = "succeeded";
        state.error = null;
      })
      .addCase(fetchTracks.rejected, (state, { payload }) => {
        state.isLoading = "failed";
        state.error = payload as string;
      });
    builder
      .addCase(addTrack.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(addTrack.fulfilled, (state, { payload }) => {
        state.data = [payload.data, ...state.data];
        state.isLoading = "succeeded";
        state.error = null;
      })
      .addCase(addTrack.rejected, (state, { payload }) => {
        state.isLoading = "failed";
        state.error = payload as string;
      });
  },
});

export const tracksReducer = tracksSlice.reducer;

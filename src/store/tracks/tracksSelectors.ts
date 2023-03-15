import { RootState } from "./../index";

export const tracksSelector = (state: RootState) => state.tracks.data;
export const lastTrackSelector = (state: RootState) => state.tracks.data[0];
export const currentTrackSelector = (state: RootState) => state.tracks.current;

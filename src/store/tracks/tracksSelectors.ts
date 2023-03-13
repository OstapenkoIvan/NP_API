import { IInitialTracksState } from "./../../types/np.types";

export const tracksSelector = (state: IInitialTracksState) => state.data;
export const lastTrackSelector = (state: IInitialTracksState) => state.data[0];

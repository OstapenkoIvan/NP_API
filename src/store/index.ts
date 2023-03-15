import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { tracksReducer } from "./tracks";
import { warehousesReducer } from "./warehouses";
import { IInitialTracksState } from "../types/np.types";

const persistSession = {
  key: "session",
  storage,
  whitelist: ["data"],
};

const store = configureStore({
  reducer: {
    tracks: persistReducer<IInitialTracksState, any>(
      persistSession,
      tracksReducer
    ),
    warehouses: warehousesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

const persistedStore = persistStore(store);
export { store, persistedStore };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

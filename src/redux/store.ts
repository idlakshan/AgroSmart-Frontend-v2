import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./features/cropSlice";
import cropApi from "./features/crop/cropApi";
import weatherApi from "./features/weather/weatherApi";
import soilApi from "./features/soil/soilApi";

export const store = configureStore({
  reducer: {
    crop: cropReducer,
    [cropApi.reducerPath]: cropApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [soilApi.reducerPath]: soilApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cropApi.middleware,
      weatherApi.middleware,
      soilApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

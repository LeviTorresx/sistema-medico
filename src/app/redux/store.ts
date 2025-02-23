import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./slices/patientSlice"; // Importa tu slice

export const store = configureStore({
  reducer: {
    patients: patientReducer, // Agrega el reducer aquí
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";

import {
  cumulativePlanedSliceReducer,
  cumulativeEarnedSliceReducer,
  cumulativeActualSliceReducer,
} from "@/state/cumulative";

import {
  dataPlanedSliceReducer,
  dataEarnedSliceReducer,
  dataActualSliceReducer,
} from "@/state/data";

export const store = configureStore({
  reducer: {
    cumulativePlaned: cumulativePlanedSliceReducer,
    cumulativeEarned: cumulativeEarnedSliceReducer,
    cumulativeActual: cumulativeActualSliceReducer,

    dataPlaned: dataPlanedSliceReducer,
    dataEarned: dataEarnedSliceReducer,
    dataActual: dataActualSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

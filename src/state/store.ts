import { configureStore } from "@reduxjs/toolkit";

import planedValueSliceReducer from "@/state/cumulative/planedValueSlice";
import earnedValueSliceReducer from "@/state/cumulative/earnedValueSlice";
import actualCostSliceReducer from "@/state/cumulative/actualCostSlice";

export const store = configureStore({
  reducer: {
    planedValue: planedValueSliceReducer,
    earnedValue: earnedValueSliceReducer,
    actualCost: actualCostSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

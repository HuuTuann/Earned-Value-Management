import { createSlice } from "@reduxjs/toolkit";

interface CumulativeState {
  data: number[];
}

const initialState: CumulativeState = {
  data: new Array(1).fill(0),
};

const cumulativePlanedSlice = createSlice({
  name: "PlanedValue",
  initialState,
  reducers: {
    setCumulativePlanedSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

const cumulativeEarnedSlice = createSlice({
  name: "EarnedValue",
  initialState,
  reducers: {
    setCumulativeEarnedSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

const cumulativeActualSlice = createSlice({
  name: "ActualCost",
  initialState,
  reducers: {
    setCumulativeActualSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setCumulativePlanedSlice,
  setCumulativeEarnedSlice,
  setCumulativeActualSlice,
} = {
  ...cumulativePlanedSlice.actions,
  ...cumulativeEarnedSlice.actions,
  ...cumulativeActualSlice.actions,
};

export const {
  cumulativePlanedSliceReducer,
  cumulativeEarnedSliceReducer,
  cumulativeActualSliceReducer,
} = {
  cumulativePlanedSliceReducer: cumulativePlanedSlice.reducer,
  cumulativeEarnedSliceReducer: cumulativeEarnedSlice.reducer,
  cumulativeActualSliceReducer: cumulativeActualSlice.reducer,
};

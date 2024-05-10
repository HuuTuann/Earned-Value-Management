import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  data: number[][];
}

const initialState: DataState = {
  data: new Array(6).fill(new Array(6).fill(0)),
};

const dataPlanedSlice = createSlice({
  name: "PlanedValue",
  initialState,
  reducers: {
    setDataPlanedSlice(state, action) {
      state.data = action.payload;
    },
  },
});

const dataEarnedSlice = createSlice({
  name: "PlanedValue",
  initialState,
  reducers: {
    setDataEarnedSlice(state, action) {
      state.data = action.payload;
    },
  },
});

const dataActualSlice = createSlice({
  name: "PlanedValue",
  initialState,
  reducers: {
    setDataActualSlice(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setDataPlanedSlice, setDataEarnedSlice, setDataActualSlice } = {
  ...dataPlanedSlice.actions,
  ...dataEarnedSlice.actions,
  ...dataActualSlice.actions,
};

export const {
  dataPlanedSliceReducer,
  dataEarnedSliceReducer,
  dataActualSliceReducer,
} = {
  dataPlanedSliceReducer: dataPlanedSlice.reducer,
  dataEarnedSliceReducer: dataEarnedSlice.reducer,
  dataActualSliceReducer: dataActualSlice.reducer,
};

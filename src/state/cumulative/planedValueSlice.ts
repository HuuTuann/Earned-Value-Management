import { createSlice } from "@reduxjs/toolkit";

interface CumulativeState {
  data: number[];
}

const initialState: CumulativeState = {
  data: new Array(1).fill(0),
};

const planedValueSlice = createSlice({
  name: "PlanedValue",
  initialState,
  reducers: {
    setPlanedValueSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPlanedValueSlice } = planedValueSlice.actions;
export default planedValueSlice.reducer;

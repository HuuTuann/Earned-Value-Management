import { createSlice } from "@reduxjs/toolkit";

interface CumulativeState {
  data: number[];
}

const initialState: CumulativeState = {
  data: new Array(1).fill(0),
};

const actualCostSlice = createSlice({
  name: "ActualCost",
  initialState,
  reducers: {
    setActualCostSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setActualCostSlice } = actualCostSlice.actions;
export default actualCostSlice.reducer;

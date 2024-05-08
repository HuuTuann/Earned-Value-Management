import { createSlice } from "@reduxjs/toolkit";

interface CumulativeState {
  data: number[];
}

const initialState: CumulativeState = {
  data: new Array(1).fill(0),
};

const earnedValueSlice = createSlice({
  name: "EarnedValue",
  initialState,
  reducers: {
    setEarnedValueSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setEarnedValueSlice } = earnedValueSlice.actions;
export default earnedValueSlice.reducer;

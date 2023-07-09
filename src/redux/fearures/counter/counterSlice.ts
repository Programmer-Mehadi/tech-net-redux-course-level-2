import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  count: number;
};

const initialState: InitialStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;
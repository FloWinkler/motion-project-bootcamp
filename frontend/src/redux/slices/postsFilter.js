import { createSlice } from "@reduxjs/toolkit";

export const postsFilter = createSlice({
  name: "postsFilter",
  initialState: {
    postsFilter: '',
  },
  reducers: {
    setpostsFilter: (state, action) => {
      console.log("slices....."+action.payload);
      state.postsFilter = action.payload;
    },
  },
});
export const { setpostsFilter } = postsFilter.actions;
export default postsFilter.reducer;
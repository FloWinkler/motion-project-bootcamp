import { createSlice } from "@reduxjs/toolkit";

export const profileFilter = createSlice({
  name: "profile-filter",
  initialState: {
    profilefilter: '',
  },
  reducers: {
    setProfileFilter: (state, action) => {
      state.profilefilter = action.payload;
    },
  },
});
export const { setProfileFilter } = profileFilter.actions;
export default profileFilter.reducer;
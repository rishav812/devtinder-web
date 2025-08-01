import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    clearFeed: (state) => {
      return null;
    },
    updateFeed: (state, action) => {
      const updatedFeed = state.filter((user) => {
        return user._id !== action.payload;
      });
      return updatedFeed;
    },
  },
});

export const { addFeed, clearFeed, updateFeed } = feedSlice.actions;
export default feedSlice.reducer;

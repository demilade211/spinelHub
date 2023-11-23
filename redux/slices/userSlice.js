import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    allUsers: [],
    allChats: [],
    selectedChat: null,
  },

  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    }, 
  },
});

export const { SetUser  } = userSlice.actions;

export default userSlice.reducer;
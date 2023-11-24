import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status:"Unauthenticated"   
  },

  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
      state.status="Authenticated"
    },
    SetExpired: (state, action) => { 
      state.status=action.payload
    },  
  },
});

export const { SetUser , SetExpired } = userSlice.actions;

export default userSlice.reducer;
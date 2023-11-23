import { combineReducers } from '@reduxjs/toolkit';
import loaderSlice from './slices/loaderSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
    user: userSlice,
    loader:loaderSlice
  });
  export default rootReducer;
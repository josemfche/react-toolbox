import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../app/reducers/filesSlice';

export const store = configureStore({
  reducer: {
    filesState: filesReducer,
  },
});

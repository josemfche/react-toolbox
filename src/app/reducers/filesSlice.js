import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  loading: false
};

export const filesSlice = createSlice({
  name: 'filesData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFiles: (state, action) => {
      console.log("PAYLOAD: ", action.payload)
      state.files = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setFiles, setLoading } = filesSlice.actions;

export const selectFiles = (state) => state.filesState;

export default filesSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import topicsReducers from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
    topicsReducers
  },
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

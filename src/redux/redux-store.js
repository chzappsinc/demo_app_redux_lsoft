import {configureStore} from '@reduxjs/toolkit';
import getUsers from './reducers/getUserSlice';
import getCountReducer from './reducers/counterSlice';

export default configureStore({
  reducer: {
    getUsers: getUsers,
    count: getCountReducer,
  },
});

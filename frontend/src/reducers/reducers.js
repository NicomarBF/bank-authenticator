import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import userReducer from '../reducers/userSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;
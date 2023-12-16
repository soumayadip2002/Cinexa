import movieReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:movieReducer
});

export default store;
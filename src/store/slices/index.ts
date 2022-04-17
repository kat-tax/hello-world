import {combineReducers} from '@reduxjs/toolkit';
import app from 'store/slices/app';

export default combineReducers({
  app: app.reducer,
});

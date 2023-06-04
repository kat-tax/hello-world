import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';
import type {AppStore} from './types';

export const initialState: AppStore = {
  ready: false,
};

export default createSlice({
  name: 'app',
  initialState,
  reducers,
});

import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';
import type {SettingsStore} from './types';

export const initialState: SettingsStore = {};

export default createSlice({
  name: 'app',
  initialState,
  reducers,
});

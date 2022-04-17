import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';
import type {AppStore} from './types';

export const initialState: AppStore = {
  active: false,
};

export default createSlice({reducers, initialState, name: 'app'});

import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';
import type {TodoStore} from './types';

export const initialState: TodoStore = {
  active: [],
  complete: [],
};

export default createSlice({
  name: 'todo',
  initialState,
  reducers,
});

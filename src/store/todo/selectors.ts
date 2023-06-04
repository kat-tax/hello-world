import {createSelector as _} from '@reduxjs/toolkit';
import {getReducer as x} from 'store';

export const getActive = _(x, store => store.todo.active);
export const getComplete = _(x, store => store.todo.complete);

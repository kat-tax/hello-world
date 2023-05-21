import {createSelector as _} from '@reduxjs/toolkit';
import {getReducer as x} from 'store/redux';

export const isReady = _(x, store => store.app.ready);

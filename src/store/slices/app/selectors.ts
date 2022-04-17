import {createSelector} from '@reduxjs/toolkit';
import {store} from 'store';

export const isActive = createSelector(store, store => store.app.active);

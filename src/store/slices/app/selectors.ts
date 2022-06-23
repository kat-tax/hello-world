import {createSelector as _} from '@reduxjs/toolkit';
import {getStore as s} from 'store';

export const isActive = _(s, s => s.app.active);

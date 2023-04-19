import {createSelector as _} from '@reduxjs/toolkit';
import {getReducer as x} from 'store/local';

export const getScheme = _(x, store => store.settings.scheme);
export const getLanguage = _(x, store => store.settings.language);

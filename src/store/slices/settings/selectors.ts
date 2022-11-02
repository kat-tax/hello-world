import {createSelector as _} from '@reduxjs/toolkit';
import {getReducer as x} from 'store';

export const getTheme = _(x, store => store.settings.theme);
export const getLanguage = _(x, store => store.settings.language);

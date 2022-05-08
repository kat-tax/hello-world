import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {isDev} from 'utils/platform';
import storage from 'extensions/storage';
import slices from 'store/slices';
import config from 'config';

const reducer = persistReducer({
  storage: storage.create(config.NAME),
  version: parseInt(config.STORE_VERSION),
  key: config.NAME,
  blacklist: [
    slices.app.name,
  ],
}, combineReducers(Object.fromEntries(
  Object.values(slices).map(slice => [slice.name, slice.reducer])
)));

export type Store = ReturnType<typeof reducer>;
export const store = (store: Store) => store;
export default configureStore({
  reducer,
  devTools: isDev(),
  middleware: [],
});

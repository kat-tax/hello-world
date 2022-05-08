import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import config from 'react-native-ultimate-config';
import storage from 'extensions/storage';
import {isDev} from 'utils/platform';
import slices from 'store/slices';

const reducer = persistReducer({
  storage: storage.create(config.APP_NAME),
  version: parseInt(config.STORE_VERSION),
  key: config.APP_NAME,
  blacklist: [
    slices.app.name,
  ],
}, combineReducers(Object.fromEntries(Object.values(slices)
  .map(slice => [slice.name, slice.reducer])))
);

export type Store = ReturnType<typeof reducer>;
export const store = (store: Store) => store;
export default configureStore({
  reducer,
  devTools: isDev(),
  middleware: [],
});

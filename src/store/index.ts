import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import config from 'react-native-ultimate-config';
import storage from 'extensions/storage';
import slices from 'store/slices';

console.log(config);
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
  devTools: process.env.NODE_ENV === 'development',
  middleware: [],
});

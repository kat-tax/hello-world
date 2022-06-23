import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import config from 'react-native-ultimate-config';
import storage from 'extensions/storage';
import {isDev} from 'utils/platform';
import slices from 'store/slices';
import middleware from 'store/middleware';

const activate = middleware.activate(slices);

const reducer = persistReducer({
  storage: storage.create(config.APP_NAME),
  version: parseInt(config.STORE_VERSION),
  key: config.APP_NAME,
  blacklist: [
    slices.app.name,
  ],
}, combineReducers({
  app: slices.app.reducer,
}));

export type Store = ReturnType<typeof reducer>;
export const getStore = (store: Store) => store;
export const store = configureStore({
  reducer,
  devTools: isDev(),
  middleware: [],
});

activate.init(store);

export default store;

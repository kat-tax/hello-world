import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {createMemoryHistory, createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';
import {persistReducer} from 'redux-persist';
import {isDev, isWeb} from 'utils/platform';
import storage from 'extensions/storage';
import config from 'react-native-ultimate-config';

import app from './app/slice';
import settings from './settings/slice';

const context = createReduxHistoryContext({
  reduxTravelling: isDev(),
  history: isWeb()
    ? createBrowserHistory()
    : createMemoryHistory(),
});

const reducer = persistReducer({
  key: config.APP_NAME,
  storage: storage.init(config.APP_NAME),
  version: parseInt(config.STORE_VERSION),
  blacklist: ['router', app.name],
}, combineReducers({
  router: context.routerReducer,
  app: app.reducer,
  settings: settings.reducer,
  // TIP: add reducers here...
}));

export const store = configureStore({
  reducer,
  devTools: isDev(),
  middleware: [
    context.routerMiddleware,
    // TIP: add middleware here...
  ],
});

export type Reducer = ReturnType<typeof reducer>;
export const getReducer = (reducer: Reducer) => reducer;
export const history = context.createReduxHistory(store);

export default store;

store.dispatch(app.actions.start());

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {createMemoryHistory, createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';
import {persistReducer} from 'redux-persist';
import {isWeb} from 'utils/platform';
import storage from 'extensions/storage';
import config from 'react-native-ultimate-config';

import app from './app';
import settings from './settings';
import todo from './todo';

const context = createReduxHistoryContext({
  reduxTravelling: true,
  history: isWeb()
    ? createBrowserHistory()
    : createMemoryHistory(),
});

const reducer = persistReducer({
  key: config.APP_NAME,
  version: config.STORE_VERSION,
  storage: storage.init(config.APP_NAME, config.STORE_VERSION),
  blacklist: ['router', app.name],
}, combineReducers({
  router: context.routerReducer,
  app: app.reducer,
  settings: settings.reducer,
  todo: todo.reducer,
  // TIP: add reducers here...
}));

export const store = configureStore({
  reducer,
  devTools: true,
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

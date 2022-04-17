import {configureStore} from '@reduxjs/toolkit';
import reducer from 'store/slices';

export type Store = ReturnType<typeof reducer>;

export const store = (store: Store) => store;

export default configureStore({
  reducer,
  devTools: true,
});

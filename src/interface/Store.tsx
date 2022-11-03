import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from 'store';

export interface StoreProps {
  children: JSX.Element,
}

export function Store(props: StoreProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistStore(store)}>
        {props.children}
      </PersistGate>
    </ReduxProvider>
  )
};

import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from 'interface/base/Loading';
import store from 'store';

export interface StoreProps {
  children: JSX.Element,
}

export function Store(props: StoreProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)} loading={<Loading/>}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

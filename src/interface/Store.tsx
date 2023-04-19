import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from 'interface/base/Loading';
import local from 'store/local';

export interface StoreProps {
  children: JSX.Element,
}

export function Store(props: StoreProps) {
  return (
    <Provider store={local}>
      <PersistGate persistor={persistStore(local)} loading={<Loading/>}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

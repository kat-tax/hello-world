import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from 'interface/base/Loading';
import redux from 'store/redux';

export interface StoreProps {
  children: JSX.Element,
}

export function Store(props: StoreProps) {
  return (
    <Provider store={redux}>
      <PersistGate persistor={persistStore(redux)} loading={<Loading/>}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

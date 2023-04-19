import {Store} from 'interface/Store';
import {Provider} from 'interface/Provider';
import {Navigator} from 'interface/Navigator';

export function Main() {
  return (
    <Store>
      <Provider>
        <Navigator/>
      </Provider>
    </Store>
  )
}

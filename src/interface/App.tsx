import {Main} from 'interface/Main';
import {Store} from 'interface/Store';
import {Provider} from 'interface/Provider';

export function App() {
  return (
    <Store>
      <Provider>
        <Main/>
      </Provider>
    </Store>
  )
}

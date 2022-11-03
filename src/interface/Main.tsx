import {Store} from 'interface/Store';
import {Providers} from 'interface/Providers';
import {Navigator} from 'interface/Navigator';

export function Main() {
  return (
    <Store>
      <Providers>
        <Navigator/>
      </Providers>
    </Store>
  )
}

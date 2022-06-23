import {AppStore, AppActivate} from './types';

export function activate(store: AppStore, action: AppActivate) {
  const {active} = action.payload;
  store.active = active;
}

import {AppStore, AppActivate} from './types';

export function activate(state: AppStore, action: AppActivate) {
  const {active} = action.payload;
  state.active = active;
}

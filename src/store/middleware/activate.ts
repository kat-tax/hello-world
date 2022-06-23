import {AppState} from 'react-native';

export default (store: any) => ({
  init: (state: any) => {
    state.dispatch(store.app.actions.activate({
      active: AppState.currentState === 'active',
    }));
    AppState.addEventListener('change', (currentState) => {
      state.dispatch(store.app.actions.activate({
        active: currentState === 'active',
      }));
    });
  },
});

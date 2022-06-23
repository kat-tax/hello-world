import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {I18nProvider} from '@lingui/react';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import {Loading} from 'interface/stacks/Loading';
import {Navigation} from 'interface/Navigation';
import {i18n, loadLocale} from 'utils/i18n';
import device from 'extensions/device';
import store from 'store';

export function App() {
  useEffect(() => {
    loadLocale(device.getLocale(true));
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistStore(store)}>
        <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <Navigation/>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </I18nProvider>
      </PersistGate>
    </Provider>
  )
};

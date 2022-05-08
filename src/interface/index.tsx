import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {I18nProvider} from '@lingui/react';
import {i18n, loadLocale} from 'utils/i18n';
import {Navigation} from 'interface/layout/Navigation';
import device from 'extensions/device';
import store from 'store';

export default () => {
  useEffect(() => {
    loadLocale(device.getLocale(true));
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
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

import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {I18nProvider} from '@lingui/react';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import {loadLocale} from 'utils/i18n';
import {i18n} from '@lingui/core';
import {Main} from 'interface/layout/Main';
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
              <Main/>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </I18nProvider>
      </PersistGate>
    </Provider>
  )
};

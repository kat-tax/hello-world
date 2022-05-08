import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {I18nProvider} from '@lingui/react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {i18n, loadLocale} from 'utils/i18n';
import {Home} from 'interface/stacks/Home';
import device from 'extensions/device';
import store from 'store';

const Stack = createStackNavigator();

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
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
              </NavigationContainer>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </I18nProvider>
      </PersistGate>
    </Provider>
  )
};

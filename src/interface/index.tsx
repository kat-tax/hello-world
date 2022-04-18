import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Main} from 'interface/layout/Main';
import store from 'store';

export function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <Main/>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

import {useEffect} from 'react';
import {I18nProvider} from '@lingui/react';
import {SafeAreaProvider} from 'extensions/viewport/SafeArea';
import {GestureHandlerRootView} from 'extensions/viewport/GestureHandlerRootView';
import {DrawerLayout} from 'extensions/viewport/DrawerLayout';
import {useLanguage} from 'interface/hooks/useLanguage';
import {Home} from 'interface/stacks/Home';
import {Menu} from 'interface/stacks/Menu';
import {i18n, loadLocale} from 'utils/i18n';

export function App() {
  const language = useLanguage();
  useEffect(() => {
    loadLocale(language);
  }, [language]);
  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <DrawerLayout
            useNativeAnimations
            drawerWidth={200}
            drawerType="front"
            renderNavigationView={() => <Menu/>}>
            <Home/>
          </DrawerLayout>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </I18nProvider>
  )
};

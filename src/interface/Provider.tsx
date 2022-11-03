import {useEffect} from 'react';
import {I18nProvider} from '@lingui/react';
import {useLanguage} from 'interface/hooks/useLanguage';
import {SafeAreaProvider} from 'interface/base/SafeArea';
import {GestureHandlerRootView} from 'interface/base/GestureHandlerRootView';
import {i18n, loadLocale} from 'utils/i18n';

export interface ProviderProps {
  children: JSX.Element,
}

export function Provider(props: ProviderProps) {
  const language = useLanguage();

  useEffect(() => {
    loadLocale(language);
  }, [language]);

  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          {props.children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </I18nProvider>
  )
}

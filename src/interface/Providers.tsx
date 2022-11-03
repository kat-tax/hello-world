import {useEffect} from 'react';
import {I18nProvider} from '@lingui/react';
import {SafeAreaProvider} from 'extensions/viewport/SafeArea';
import {GestureHandlerRootView} from 'extensions/viewport/GestureHandlerRootView';
import {useLanguage} from 'interface/hooks/useLanguage';
import {i18n, loadLocale} from 'utils/i18n';

export interface ProviderProps {
  children: JSX.Element,
}

export function Providers(props: ProviderProps) {
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

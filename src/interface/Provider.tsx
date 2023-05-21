import {useEffect} from 'react';
import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import {useLanguage} from 'interface/hooks/useLanguage';
import {BootSplash} from 'extensions/controls/BootSplash';
import {SafeAreaProvider} from 'extensions/controls/SafeArea';
import {GestureHandlerRootView} from 'extensions/controls/GestureHandlerRootView';
import {loadLocale} from 'utils/i18n';

export interface ProviderProps {
  children: JSX.Element,
}

export function Provider(props: ProviderProps) {
  const language = useLanguage();

  useEffect(() => {loadLocale(language)}, [language]);
  useEffect(() => {BootSplash.hide({fade: true})}, []);

  return (
    <I18nProvider i18n={i18n}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          {props.children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </I18nProvider>
  )
}

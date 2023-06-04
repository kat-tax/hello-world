import {useEffect} from 'react';
import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import {TamaguiProvider} from 'tamagui';
import {SafeAreaProvider} from 'extensions/controls/SafeArea';
import {GestureHandlerRootView} from 'extensions/controls/GestureHandlerRootView';
import {BootSplash} from 'extensions/controls/BootSplash';
import {useLanguage} from 'interface/hooks/useLanguage';
import {loadLocale} from 'utils/i18n';
import config from 'theme/config';

export interface ProviderProps {
  children: JSX.Element,
}

export function Provider(props: ProviderProps) {
  const language = useLanguage();

  useEffect(() => {loadLocale(language)}, [language]);
  useEffect(() => {BootSplash.hide({fade: true})}, []);

  return (
    <I18nProvider i18n={i18n}>
      <TamaguiProvider config={config} defaultTheme="light">
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            {props.children}
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </TamaguiProvider>
    </I18nProvider>
  );
}

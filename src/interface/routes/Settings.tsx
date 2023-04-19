import {t, Trans} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useScheme} from 'interface/hooks/useScheme';
import {Picker} from 'extensions/controls/Picker';
import {Page} from 'interface/layout/Page';
import {getScheme} from 'store/local/settings/selectors';
import {getLanguage} from 'store/local/settings/selectors';
import settings from 'store/local/settings/slice';

export function Settings() {
  useLingui();

  const scheme = useScheme();
  const savedScheme = useSelector(getScheme);
  const savedLanguage = useSelector(getLanguage);
  const isDark = scheme === 'dark';
  const classes = { 
    label: [
      styles.label,
      isDark && styles.labelDark,
    ],
    select: [
      styles.select,
      isDark && styles.selectDark,
    ],
  };

  const dispatch = useDispatch();

  return (
    <Page title={t`Settings`}>
      <Text style={classes.label}>
        <Trans>Theme</Trans>
      </Text>
      <Picker
        style={classes.select}
        selectedValue={savedScheme}
        onValueChange={scheme => dispatch(settings.actions.scheme({scheme}))}>
        <Picker.Item label={t`Default`} value=""/>
        <Picker.Item label={t`Light`} value="light"/>
        <Picker.Item label={t`Dark`} value="dark"/>
      </Picker>
      <Text style={classes.label}>
        <Trans>Language</Trans>
      </Text>
      <Picker
        style={classes.select}
        selectedValue={savedLanguage}
        onValueChange={language => dispatch(settings.actions.language({language}))}>
        <Picker.Item label={t`Default`} value=""/>
        <Picker.Item label="English" value="en"/>
        <Picker.Item label="Deutsch" value="de"/>
        <Picker.Item label="Español" value="es"/>
        <Picker.Item label="Portugués" value="pt"/>
        <Picker.Item label="Bahasa Indonesia" value="id"/>
        <Picker.Item label="Русский" value="ru"/>
        <Picker.Item label="やまと" value="ja"/>
        <Picker.Item label="عربي" value="ar"/>
      </Picker>
    </Page>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  labelDark: {
    color: '#999',
  },
  select: {
    width: 200,
    padding: 8,
    color: '#000',
    borderColor: '#000',
  },
  selectDark: {
    color: '#FFF',
    borderColor: '#333',
    backgroundColor: '#111',
  },
});

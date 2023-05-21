import {Trans} from '@lingui/macro';
import {StyleSheet, View} from 'react-native';
import {useScheme} from 'interface/hooks/useScheme';
import {MenuItem} from 'interface/base/MenuItem';

export function Menu() {
  const scheme = useScheme();
  const isDark = scheme === 'dark';

  return (
    <View style={[styles.root, isDark && styles.rootDark]}>
      <MenuItem path="/">
        <Trans>Home</Trans>
      </MenuItem>
      <MenuItem path="/tasks">
        <Trans>Tasks</Trans>
      </MenuItem>
      <MenuItem path="/notes">
        <Trans>Notes</Trans>
      </MenuItem>
      <MenuItem path="/media">
        <Trans>Media</Trans>
      </MenuItem>
      <MenuItem path="/snippets">
        <Trans>Snippets</Trans>
      </MenuItem>
      <View style={styles.fill}/>
      <MenuItem path="/settings">
        <Trans>Settings</Trans>
      </MenuItem>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 14,
    height: '100%',
    backgroundColor: '#272727',
  },
  rootDark: {
    backgroundColor: '#111',
  },
  fill: {
    flex: 1,
  },
});

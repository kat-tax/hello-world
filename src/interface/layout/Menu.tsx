import {t} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {StyleSheet, View, Text} from 'react-native';
import {useScheme} from 'interface/hooks/useScheme';
import {useLocation, Link} from 'extensions/navigation';

export function Menu() {
  useLingui();

  const scheme = useScheme();
  const {pathname} = useLocation();
  const isDark = scheme === 'dark';
  const classes = {
    root: [
      styles.root,
      isDark && styles.rootDark,
    ],
    home: [
      styles.link,
      pathname === '/' && styles.active,
    ],
    settings: [
      styles.link,
      pathname === '/settings' && styles.active,
    ],
  };

  return (
    <View style={classes.root}>
      <Link to="/">
        <View style={styles.item}>
          <Text style={classes.home}>
            {t`Home`}
          </Text>
        </View>
      </Link>
      <Link to="/settings">
        <View style={styles.item}>
          <Text style={classes.settings}>
            {t`Settings`}
          </Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 8,
    height: '100%',
    backgroundColor: '#272727',
  },
  rootDark: {
    backgroundColor: '#111',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#999',
  },
  active: {
    color: '#FFF',
  },
  activeDark: {
    color: '#000',
  },
});

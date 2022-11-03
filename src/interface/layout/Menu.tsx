import {t} from '@lingui/macro';
import {StyleSheet, View, Text} from 'react-native';
import {useLocation, Link} from 'extensions/navigation';

export function Menu() {
  const {pathname} = useLocation();
  const classes = {
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
    <View style={styles.root}>
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
    height: '100%',
    backgroundColor: '#111',
    padding: 8,
  },
  item: {
    padding: 16,
  },
  link: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
    color: '#999',
  },
  active: {
    color: '#FFF',
  }
});

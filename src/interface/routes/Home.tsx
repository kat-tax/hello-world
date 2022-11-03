import {t} from '@lingui/macro';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from 'interface/hooks/useTheme';

export function Home() {
  const theme = useTheme();
  const isDark = theme === 'dark';
  const classes = {
    root: [
      styles.root,
      isDark && styles.rootDark,
    ],
    greeting: [
      styles.greeting,
      isDark && styles.greetingDark,
    ],
  };

  return (
    <View style={classes.root}>
      <Text selectable style={classes.greeting}>
        {t`Hello, World!`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  rootDark: {
    backgroundColor: '#000',
  },
  greeting: {
    color: '#000',
    fontSize: 24,
  },
  greetingDark: {
    color: '#FFF',
  },
});

import {StyleSheet, View, Text} from 'react-native';
import {useScheme} from 'interface/hooks/useScheme';

import type {ReactNode} from 'react';

export interface PageProps {
  header: string,
  children?: ReactNode,
}

export function Page(props: PageProps) {
  const scheme = useScheme();
  const isDark = scheme === 'dark';
  const classes = {
    root: [
      styles.root,
      isDark && styles.rootDark,
    ],
    header: [
      styles.header,
      isDark && styles.headerDark,
    ],
  };

  return (
    <View style={classes.root}>
      <Text selectable style={classes.header}>
        {props.header}
      </Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  rootDark: {
    backgroundColor: '#000',
  },
  header: {
    marginBottom: 8,
    fontSize: 36,
    color: '#000',
  },
  headerDark: {
    color: '#FFF',
  },
});

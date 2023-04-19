import {StyleSheet, View, Text} from 'react-native';
import {useScheme} from 'interface/hooks/useScheme';

import type {ReactNode} from 'react';

export interface PageProps {
  title: string,
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
    title: [
      styles.title,
      isDark && styles.titleDark,
    ],
  };

  return (
    <View style={classes.root}>
      <View style={styles.content}>
        <Text selectable style={classes.title}>
          {props.title}
        </Text>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    maxWidth: 400,
  },
  rootDark: {
    backgroundColor: '#000',
  },
  title: {
    marginBottom: 8,
    fontSize: 36,
    color: '#000',
  },
  titleDark: {
    color: '#FFF',
  },
});

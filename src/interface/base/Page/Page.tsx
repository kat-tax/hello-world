import {View, Text} from 'react-native';
import {useScheme} from 'interface/hooks/useScheme';
import styles from './Page.styles';

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

import {t} from '@lingui/macro';
import {StyleSheet, View, Text} from 'react-native';

export function Home() {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        {t`Hello World`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: '#000',
  },
});

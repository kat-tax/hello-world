import {t} from '@lingui/macro';
import {StyleSheet, Text} from 'react-native';

export function Main() {
  return (
    <Text style={styles.greeting}>
      {t`Hello World`}
    </Text>
  );
}

const styles = StyleSheet.create({
  greeting: {
    color: '#fff',
  },
});

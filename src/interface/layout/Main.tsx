import {StyleSheet, Text} from 'react-native';

export function Main() {
  return (
    <Text style={styles.greeting}>
      Hello World
    </Text>
  );
}

const styles = StyleSheet.create({
  greeting: {
    color: '#fff',
  },
});

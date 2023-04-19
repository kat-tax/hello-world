import {View, ActivityIndicator} from 'react-native';
import styles from './Loading.styles';

export function Loading() {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large"/>
    </View>
  );
}

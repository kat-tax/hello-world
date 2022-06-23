import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Loading() {
  const {colors} = useTheme();
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={colors.primary}/>
    </View>
  );
}

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

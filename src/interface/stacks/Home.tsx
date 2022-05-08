import {t} from '@lingui/macro';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Home() {
  const {colors} = useTheme();
  return (
    <View style={styles.root}>
      <Text selectable style={{color: colors.text}}>
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
});

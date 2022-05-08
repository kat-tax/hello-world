import {t} from '@lingui/macro';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Settings() {
  const {colors} = useTheme();
  return (
    <View style={styles.root}>
      <Text selectable style={{color: colors.text}}>
        {t`Put settings here`}
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

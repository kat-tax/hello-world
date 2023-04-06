import {t} from '@lingui/macro';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {useLingui} from '@lingui/react';
import {Page} from 'interface/stacks/Page';

export function Icons() {
  useLingui();
  return (
    <Page title={t`Icons`}>
      <ScrollView style={styles.list}>
        <Text style={styles.temp}>
          Not implemented
        </Text>
      </ScrollView>
    </Page>
  );
}

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
  temp: {
    color: 'white',
  }
});

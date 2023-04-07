import {t} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {StyleSheet, ScrollView} from 'react-native';
import {IconsSocialBlogger} from 'interface/icons/IconsSocialBlogger';
import {IconsSocialFacebook} from 'interface/icons/IconsSocialFacebook';
import {IconsSocialGoogle} from 'interface/icons/IconsSocialGoogle';
import {IconsSocialLinkedin} from 'interface/icons/IconsSocialLinkedin';
import {IconsSocialPinterest} from 'interface/icons/IconsSocialPinterest';
import {IconsSocialReddit} from 'interface/icons/IconsSocialReddit';
import {IconsSocialTwitter} from 'interface/icons/IconsSocialTwitter';
import {Page} from 'interface/stacks/Page';

export function Icons() {
  useLingui();
  return (
    <Page title={t`Icons`}>
      <ScrollView contentContainerStyle={styles.list}>
        <IconsSocialBlogger/>
        <IconsSocialFacebook/>
        <IconsSocialGoogle/>
        <IconsSocialLinkedin/>
        <IconsSocialPinterest/>
        <IconsSocialReddit/>
        <IconsSocialTwitter/>
      </ScrollView>
    </Page>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  temp: {
    color: 'white',
  }
});

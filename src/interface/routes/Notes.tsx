import {t} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {Page} from 'interface/layout/Page';

export function Notes() {
  useLingui();
  return (
    <Page title={t`Notes`}/>
  );
}

import {t} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {Page} from 'interface/stacks/Page';

export function Home() {
  useLingui();
  return (
    <Page title={t`Hello, World!`}/>
  );
}

import {t} from '@lingui/macro';
import {useLingui} from '@lingui/react';
import {Page} from 'interface/base/Page';

export function Snippets() {
  useLingui();
  return (
    <Page title={t`Snippets`}/>
  );
}

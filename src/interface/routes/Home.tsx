import {t} from '@lingui/macro';
import {Page} from 'interface/stacks/Page';

export function Home() {
  return (
    <Page title={t`Hello, World!`}/>
  );
}

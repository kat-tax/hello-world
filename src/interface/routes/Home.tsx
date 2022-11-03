import {t} from '@lingui/macro';
import {Page} from 'interface/stacks/Page';

export function Home() {
  return (
    <Page header={t`Hello, World!`}/>
  );
}

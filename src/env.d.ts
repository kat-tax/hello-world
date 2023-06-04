import type {SvgProps} from 'react-native-svg';
import config from './theme/config';

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

declare module '*.svg' {
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

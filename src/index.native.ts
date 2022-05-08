import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import config from 'react-native-ultimate-config';
import App from 'interface';

AppRegistry.registerComponent(config.APP_NAME, () => App);

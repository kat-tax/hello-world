import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';

import config from 'react-native-ultimate-config';
import {enableFreeze} from 'react-native-screens';
import {AppRegistry} from 'react-native';
import {App} from 'interface/App';

enableFreeze(true);

AppRegistry.registerComponent(config.APP_NAME, () => App);

import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';

import config from 'react-native-ultimate-config';
import {AppRegistry} from 'react-native';
import {App} from 'interface/App';

AppRegistry.registerComponent(config.APP_NAME, () => App);

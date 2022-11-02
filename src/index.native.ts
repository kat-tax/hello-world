import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';

import config from 'react-native-ultimate-config';
import {AppRegistry} from 'react-native';
import {Main} from 'interface/Main';

AppRegistry.registerComponent(config.APP_NAME, () => Main);

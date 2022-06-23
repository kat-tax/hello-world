import 'react-native-gesture-handler';

import config from 'react-native-ultimate-config';
import {AppRegistry} from 'react-native';
import {App} from 'interface/App';

AppRegistry.registerComponent(config.APP_NAME, () => App);
AppRegistry.runApplication(config.APP_NAME, {
  rootTag: document.getElementById('app'),
});

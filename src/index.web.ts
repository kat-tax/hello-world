import {AppRegistry} from 'react-native';
import App from 'interface';
import config from 'config';

AppRegistry.registerComponent(config.NAME, () => App);
AppRegistry.runApplication(config.NAME, {
  rootTag: document.getElementById('app'),
});

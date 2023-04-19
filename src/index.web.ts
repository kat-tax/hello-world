import config from 'react-native-ultimate-config';
import {AppRegistry} from 'react-native';
import {Main} from 'interface/Main';

AppRegistry.registerComponent(config.APP_NAME, () => Main);
AppRegistry.runApplication(config.APP_NAME, {
  rootTag: document.getElementById('root'),
});

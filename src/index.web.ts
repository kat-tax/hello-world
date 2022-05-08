import {AppRegistry} from 'react-native';
import App from 'interface';

AppRegistry.registerComponent('HelloWorld', () => App);
AppRegistry.runApplication('HelloWorld', {
  rootTag: document.getElementById('app'),
});

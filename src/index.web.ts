import '@tamagui/core/reset.css';

// @ts-ignore
import icons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import config from 'react-native-ultimate-config';
import {AppRegistry} from 'react-native';
import {App} from 'interface/App';

const font = `@font-face {src: url(${icons}); font-family: MaterialIcons}`;
const style = document.createElement('style');
style.type = 'text/css';
// @ts-ignore
if (style.styleSheet) style.styleSheet.cssText = font;
else style.appendChild(document.createTextNode(font));
document.head.appendChild(style);

AppRegistry.registerComponent(config.APP_NAME, () => App);
AppRegistry.runApplication(config.APP_NAME, {
  rootTag: document.getElementById('root'),
});

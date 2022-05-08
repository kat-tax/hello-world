import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDarkMode} from 'interface/hooks/useDarkMode';
import {Settings} from 'interface/stacks/Settings';
import {Home} from 'interface/stacks/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function Navigation() {
  return (
    <NavigationContainer theme={useDarkMode() ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{title: 'Hello App Display Name'}}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

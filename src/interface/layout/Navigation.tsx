import {useColorScheme, useWindowDimensions} from 'react-native';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Settings} from 'interface/stacks/Settings';
import {Home} from 'interface/stacks/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function Navigation() {
  const scheme = useColorScheme();
  const screen = useWindowDimensions();
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerType: screen.width >= 800 ? 'permanent' : 'front',
        }}>
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{title: 'Hello App Display Name'}}
        />
        <Drawer.Screen
          name='Settings'
          component={Settings}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import {useColorScheme} from 'react-native';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Settings} from 'interface/stacks/Settings';
import {Home} from 'interface/stacks/Home';
import {Menu} from 'interface/stacks/Menu';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      documentTitle={{formatter: (_, route) => `${route?.name} - Hello App Display Name`}}>
      <Menu/>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

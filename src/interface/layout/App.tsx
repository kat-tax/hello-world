import {useRef, useCallback} from 'react';
import {useWindowDimensions, View, StyleSheet} from 'react-native';
import {DrawerLayout} from 'extensions/viewport/DrawerLayout';
import {Outlet} from 'extensions/navigation';
import {Menu} from 'interface/layout/Menu';
import {isWeb} from 'utils/platform';

const MENU_WIDTH = 200;

export function App() {
  const drawer = useRef<DrawerLayout>(null);
  const screen = useWindowDimensions();
  const isFixedMenu = screen.width > 800;
  const isDrawerEnabled = !isFixedMenu;

  const renderMenu = useCallback(() => isDrawerEnabled ? <Menu/> : null, [isDrawerEnabled]);
  const openMenu = useCallback(() => drawer.current?.openDrawer(), []);

  return (
    <DrawerLayout
      drawerType="front"
      drawerPosition="right"
      drawerWidth={MENU_WIDTH}
      drawerLockMode={isDrawerEnabled ? 'unlocked' : 'locked-closed'}
      useNativeAnimations={!isWeb()}
      renderNavigationView={renderMenu}>
      <View style={styles.root}>
        {isFixedMenu &&
          <View style={styles.menu}>
            <Menu/>
          </View>
        }
        <Outlet context={[openMenu]}/>
      </View>
    </DrawerLayout>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    width: MENU_WIDTH,
  },
});

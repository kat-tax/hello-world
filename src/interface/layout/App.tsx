import {useRef, useCallback} from 'react';
import {useWindowDimensions, View, StyleSheet} from 'react-native';
import {DrawerLayout} from 'interface/base/DrawerLayout';
import {Menu} from 'interface/layout/Menu';
import {Outlet} from 'extensions/navigation';
import {isWeb} from 'utils/platform';

const MENU_WIDTH = 200;

export function App() {
  const drawer = useRef<DrawerLayout>(null);
  const screen = useWindowDimensions();
  const hasDrawer = screen.width < 800;

  const openMenu = useCallback(() => drawer.current?.openDrawer(), []);
  const renderMenu = useCallback(() => hasDrawer ? <Menu/> : null, [hasDrawer]);

  return (
    <DrawerLayout
      drawerType="front"
      drawerPosition="right"
      drawerWidth={MENU_WIDTH}
      drawerLockMode={hasDrawer ? 'unlocked' : 'locked-closed'}
      useNativeAnimations={!isWeb()}
      renderNavigationView={renderMenu}>
      <View style={styles.root}>
        {!hasDrawer &&
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
    borderRightWidth: 1,
    borderColor: '#333',
  },
});

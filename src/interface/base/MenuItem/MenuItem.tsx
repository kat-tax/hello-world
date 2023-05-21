import {View, Text} from 'react-native';
import {useLocation, Link} from 'extensions/navigation';
import styles from './MenuItem.styles';

export interface MenuItemProps {
  path: string;
  children: React.ReactNode;
}

export function MenuItem(props: MenuItemProps) {
  const {pathname} = useLocation();
  return (
    <Link to={props.path}>
      <View style={styles.item}>
        <Text style={[styles.link, props.path === pathname && styles.active]}>
          {props.children}
        </Text>
      </View>
    </Link>
  );
}

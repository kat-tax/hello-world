import {StyleSheet, View, Text} from 'react-native';
import {useLocation, Link} from 'extensions/navigation';

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


const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#999',
  },
  active: {
    color: '#FFF',
  },
});

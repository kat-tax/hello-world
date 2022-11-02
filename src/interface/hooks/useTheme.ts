import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {getTheme} from 'store/slices/settings/selectors';

export function useTheme() {
  const deviceTheme = useColorScheme();
  const savedTheme = useSelector(getTheme);
  return savedTheme || deviceTheme || 'light';
}

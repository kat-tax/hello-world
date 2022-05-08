import {useEffect, useState} from 'react';
import device from 'extensions/device';

export function useDarkMode() {
  const [isDark, setDark] = useState(device.isDarkMode());
  useEffect(() => device.suscribeTheme(setDark));
  return isDark;
}

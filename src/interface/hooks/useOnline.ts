import {useState, useEffect} from 'react';
import device from 'extensions/device';

export function useOnline() {
  const [isOnline, setOnline] = useState(false);
  useEffect(() => {
    device.isOnline().then(setOnline);
    return device.suscribeOnline(setOnline);
  }, []);
  return isOnline;
}

import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {getLanguage} from 'store/settings/selectors';
import device from 'extensions/device';

import type {Language} from 'utils/i18n';

export function useLanguage() {
  const deviceLanguage = useRef(device.getLocale(true) as Language);
  const savedLanguage = useSelector(getLanguage);
  return savedLanguage || deviceLanguage.current || 'en';
}

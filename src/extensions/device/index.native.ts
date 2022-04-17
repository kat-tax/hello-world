import RN from 'react-native';
import type {DeviceBase} from 'extensions/device/base';

class Device implements DeviceBase {
  share(url: string, title: string) {
    RN.Share.share({url, title, message: url}, {
      dialogTitle: title,
    });
  }

  isDarkMode() {
    return RN.Appearance.getColorScheme() === 'dark';
  }
}

export default new Device();

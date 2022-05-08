import {Share, Platform, Appearance, NativeModules} from 'react-native';
import type {DeviceBase} from 'extensions/device/base';

class Device implements DeviceBase {
  share(url: string, title: string) {
    Share.share({url, title, message: url}, {
      dialogTitle: title,
    });
  }

  getLocale(short?: boolean) {
    const locale: string = Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
        || NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
    return short
      ? Platform.OS === 'ios'
        ? locale.split('-').shift() || locale
        : locale.split('_').shift() || locale
      : locale;
  }

  isDarkMode() {
    return Appearance.getColorScheme() === 'dark';
  }
}

export default new Device();

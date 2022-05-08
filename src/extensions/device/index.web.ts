import type {DeviceBase} from 'extensions/device/base';

class Device implements DeviceBase {
  share(url: string, title: string) {
    navigator.share({url, title}).catch(() => {});
  }

  getLocale(short?: boolean): string {
    const locale = navigator.language;
    return short ? locale.split('-').shift() || locale : locale;
  }

  isDarkMode() {
    return matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

export default new Device();

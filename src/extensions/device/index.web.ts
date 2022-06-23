import type {DeviceBase} from 'extensions/device/base';

class Device implements DeviceBase {
  getLocale(short?: boolean): string {
    const locale = navigator.language;
    return short ? locale.split('-').shift() || locale : locale;
  }

  share(url: string, title: string) {
    navigator.share({url, title}).catch(() => {});
  }
}

export default new Device();

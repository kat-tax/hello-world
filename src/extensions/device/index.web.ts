import type {DeviceBase} from 'extensions/device/base';

class Device implements DeviceBase {
  getLocale(short?: boolean): string {
    const locale = navigator.language;
    return short ? locale.split('-').shift() || locale : locale;
  }

  share(url: string, title: string) {
    navigator.share({url, title}).catch(() => {});
  }

  async isOnline() {
    return navigator.onLine;
  }

  suscribeOnline(update: (isOnline: boolean) => void) {
    const handler = () => update(navigator.onLine);
    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  }
}

export default new Device();

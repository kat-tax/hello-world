import type {DeviceBase} from './base';

class Device implements DeviceBase {
  share(url: string, title: string) {
    navigator.share({url, title}).catch(() => {});
  }

  isDarkMode() {
    return matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

export default new Device();

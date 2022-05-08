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

  suscribeTheme(update: (isDark: boolean) => void) {
    const query = matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => update(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }
}

export default new Device();

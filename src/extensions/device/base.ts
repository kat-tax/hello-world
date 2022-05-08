export interface DeviceBase {
  share(url: string, title: string): void,
  getLocale(short?: boolean): string,
  isDarkMode(): boolean,
}

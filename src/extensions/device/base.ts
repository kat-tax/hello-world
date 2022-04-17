export interface DeviceBase {
  isDarkMode(): boolean,
  share(url: string, title: string): void,
}

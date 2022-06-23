export interface DeviceBase {
  getLocale(short?: boolean): string,
  share(url: string, title: string): void,
}

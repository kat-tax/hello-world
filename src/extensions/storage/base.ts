export interface StorageBase {
  init(key: string): {
    getItem(key: string, ...args: Array<any>): any;
    setItem(key: string, value: any, ...args: Array<any>): any;
    removeItem(key: string, ...args: Array<any>): any;
    clear(): void,
  },
}

import {MMKV} from 'react-native-mmkv';
import type {StorageBase} from 'extensions/storage/base';

export class Storage implements StorageBase {
  init(id: string, version: number) {
    const db = new MMKV({id, path: `v${version}`});
    return {
      setItem: (key: string, value: any) => {
        db.set(key, value);
        return Promise.resolve(true);
      },
      getItem: (key: string) => {
        const value = db.getString(key);
        return Promise.resolve(value);
      },
      removeItem: (key: string) => {
        db.delete(key);
        return Promise.resolve();
      },
      clear: () => {
        db.clearAll();
        return Promise.resolve();
      }
    };
  }
}

export default new Storage();

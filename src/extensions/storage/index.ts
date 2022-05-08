import {MMKV} from 'react-native-mmkv';

import type {StorageBase} from 'extensions/storage/base';
import type {Storage as PersistStorage} from 'redux-persist';

export class Storage implements StorageBase {
  create(key: string) {
    const database = new MMKV({id: key});
    const storage: PersistStorage = {
      setItem: (k, v) => {
        database.set(k, v);
        return Promise.resolve(true);
      },
      getItem: (k) => {
        const v = database.getString(k);
        return Promise.resolve(v);
      },
      removeItem: (k) => {
        database.delete(k);
        return Promise.resolve();
      },
    };
    return storage;
  }
}

export default new Storage();

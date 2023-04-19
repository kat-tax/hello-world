import {createStore, get, set, del, clear} from 'idb-keyval';
import config from 'react-native-ultimate-config';

import type {StorageBase} from 'extensions/storage/base';

export class Storage implements StorageBase {
  init(id: string) {
    const db = createStore(id, config.STORE_VERSION);
    return {
      getItem: (key: string) => get(key, db),
      setItem: (key: string, value: any) => set(key, value, db),
      removeItem: (key: string) => del(key, db),
      clear: () => clear(db),
    };
  }
}

export default new Storage();

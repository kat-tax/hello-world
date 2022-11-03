import {createStore, get, set, del, clear} from 'idb-keyval';
import type {StorageBase} from 'extensions/storage/base';

export class Storage implements StorageBase {
  create(id: string) {
    const db = createStore(`db-${id}`, `store-${id}`);
    return {
      getItem: (key: string) => get(key, db),
      setItem: (key: string, value: any) => set(key, value, db),
      removeItem: (key: string) => del(key, db),
      clear: () => clear(db),
    };
  }
}

export default new Storage();

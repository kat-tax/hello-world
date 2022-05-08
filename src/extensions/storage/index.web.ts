import localForage from 'localforage';

import type {StorageBase} from 'extensions/storage/base';
import type {Storage as PersistStorage} from 'redux-persist';

export class Storage implements StorageBase {
  create(key: string) {
    const database = localForage.createInstance({name: key});
    const storage: PersistStorage = {
      getItem: database.getItem,
      setItem: database.setItem,
      removeItem: database.removeItem,
    };
    return storage;
  }
}

export default new Storage();

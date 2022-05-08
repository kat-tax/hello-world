import {Storage} from 'redux-persist';

export interface StorageBase {
  create(key: string): Storage,
}

import {syncedStore, getYjsDoc} from '@syncedstore/core';
import {IndexeddbPersistence} from 'y-indexeddb';
import {WebrtcProvider} from 'y-webrtc';
import config from 'react-native-ultimate-config';

import tasks from './tasks';

const store = syncedStore({
  ...tasks,
});

const key = `${config.APP_NAME}::synced`;
const doc = getYjsDoc(store);

export const webrtc = new WebrtcProvider(key, doc);
export const persist = new IndexeddbPersistence(key, doc);

export const connect = () => webrtc.connect();
export const disconnect = () => webrtc.disconnect();

export default store;

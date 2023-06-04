import {TodoStore, TodoAdd, TodoComplete} from './types';

export function add(store: TodoStore, action: TodoAdd) {
  const {item} = action.payload;
  if (store.complete.includes(item)) {
    store.complete.splice(store.complete.indexOf(item), 1);
    store.active.unshift(item);
  } else if (!store.active.includes(item)) {
    store.active.push(item);
  }
}

export function complete(store: TodoStore, action: TodoComplete) {
  const {item} = action.payload;
  store.active.splice(store.active.indexOf(item), 1);
  if (!store.complete.includes(item)) {
    store.complete.push(item);
  }
}

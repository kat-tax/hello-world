import type {PayloadAction} from '@reduxjs/toolkit';

export type TodoStore = {
  active: string[],
  complete: string[],
}

export type TodoAdd = PayloadAction<{item: string}>
export type TodoComplete = PayloadAction<{item: string}>

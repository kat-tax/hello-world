import type {PayloadAction} from '@reduxjs/toolkit';

export type AppStore = {
  active: boolean,
}

export type AppActivate = PayloadAction<{active: boolean}>

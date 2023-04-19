/// <reference types="vitest"/>

import {defineConfig} from 'vite';
import {viteCommonjs, esbuildCommonjs} from '@originjs/vite-plugin-commonjs';
import {lingui} from '@lingui/vite-plugin';
import tsPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
  const isDev = mode === 'development';
  return {
    plugins: [
      tsPaths(),
      viteCommonjs(),
      react({
        babel: {
          plugins: ["macros"]
        }
      }),
      lingui(),
    ],
    resolve: {
      extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
      alias: {
        'react-native': 'react-native-web',
        'react-native-maps': 'react-native-web-maps',
        'react-native-webview': 'react-native-web-webview',
        'lottie-react-native': 'react-native-web-lottie',
        'recyclerlistview': 'recyclerlistview/web',
      },
    },
    optimizeDeps: {
      include: [
        'react-native-gesture-handler',
      ],
      esbuildOptions: {
        mainFields: ['module', 'main'],
        resolveExtensions: ['.web.js', '.js', '.ts'],
        plugins: [esbuildCommonjs([
          'react-native-gesture-handler/DrawerLayout',
        ])],
      },
    },
    define: {
      global: 'window',
      __DEV__: isDev,
      ...isDev && {
        process: {
          env: {
            NODE_ENV: '"development"',
          },
        },
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});

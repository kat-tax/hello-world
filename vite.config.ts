/// <reference types="vitest"/>

import {defineConfig} from 'vite';
import {visualizer} from 'rollup-plugin-visualizer';
import {lingui} from '@lingui/vite-plugin';
import react from '@vitejs/plugin-react';
import tsPaths from 'vite-tsconfig-paths';

export default defineConfig(({mode}) => {
  const isDev = mode === 'development';
  return {
    plugins: [
      tsPaths(),
      lingui(),
      react({babel: {plugins: ['macros']}}),
      visualizer(),
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
    build: {
      outDir: 'dist/web',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: (id) => id.includes('node_modules') ? 'vendor' : null,
        }
      }
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
  };
});

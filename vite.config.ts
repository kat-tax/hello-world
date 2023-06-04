/// <reference types="vitest"/>

import {defineConfig} from 'vite';
import {tamaguiPlugin, tamaguiExtractPlugin} from '@tamagui/vite-plugin';
import {visualizer} from 'rollup-plugin-visualizer';
import {lingui} from '@lingui/vite-plugin';
import react from '@vitejs/plugin-react';
import tsPaths from 'vite-tsconfig-paths';

const tamagui = {
  config: 'src/theme/config.ts',
  components: ['tamagui'],
  useReactNativeWebLite: true,
};

export default defineConfig(config => {
  const isDev = config.mode === 'development';
  return {
    clearScreen: true,
    plugins: [
      tsPaths(),
      lingui(),
      tamaguiPlugin(tamagui),
      tamaguiExtractPlugin(tamagui),
      react({babel: {plugins: ['macros']}}),
      visualizer(),
    ],
    define: {
      global: 'window',
      __DEV__: isDev,
      ...{
        process: {
          env: {
            DEV: JSON.stringify(isDev ? 'true' : 'false'),
            NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
            TAMAGUI_TARGET: JSON.stringify('web'),
          },
        },
      },
    },
    resolve: {
      resolveExtensions: [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        '.js',
        '.jsx',
        '.json',
        '.ts',
        '.tsx',
        '.mjs',
      ],
      loader: {
        '.js': 'jsx',
      },
      alias: {
        'react-native': 'react-native-web',
        'react-native-maps': 'react-native-web-maps',
        'react-native-webview': 'react-native-web-webview',
        'react-native-vector-icons/MaterialIcons': 'react-native-vector-icons/dist/MaterialIcons',
        'lottie-react-native': 'react-native-web-lottie',
        'recyclerlistview': 'recyclerlistview/web',
        // TIP: add package aliases here as needed
      },
    },
    build: {
      outDir: 'dist/web',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: id => id.includes('node_modules') ? 'vendor' : null,
        }
      }
    },
  };
});

import {defineConfig} from 'vite';
import {viteCommonjs, esbuildCommonjs} from '@originjs/vite-plugin-commonjs';
import {lingui} from '@lingui/vite-plugin';
import tsPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc';

export default defineConfig({
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
    },
  },
  optimizeDeps: {
    include: ['react-native-gesture-handler'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts'],
      plugins: [esbuildCommonjs(['react-native-gesture-handler/DrawerLayout'])],
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    global: 'window',
    __DEV__: true,
  },
});

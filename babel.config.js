module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', {
      useTransformReactJSXExperimental: true,
    }],
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', {
      runtime: 'automatic',
    }],
    ['module-resolver', {
      root: ['./src'],
      alias: {
        extensions: './extensions',
        interface: './interface',
        config: './config',
        assets: './assets',
        store: './store',
        utils: './utils',
      },
    }],
  ],
};

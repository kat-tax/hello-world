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
        assets: './assets',
        utils: './utils',
        store: './store',
      },
    }],
  ],
};

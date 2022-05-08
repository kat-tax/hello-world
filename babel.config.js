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
        assets: './assets',
        extensions: './extensions',
        interface: './interface',
        store: './store',
        utils: './utils',
      },
    }],
  ],
};

process.env.TAMAGUI_TARGET = 'native';

module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  plugins: [
    'macros',
    'tsconfig-paths-module-resolver',
    ['transform-inline-environment-variables', {
      include: ['TAMAGUI_TARGET'],
    }],
  ],
};

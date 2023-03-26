module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@data': './src/data',
          '@extra': './src/extra',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@config': './src/config',
          '@store': './src/store',
          '@slices': './src/slices',
          '@actions': './src/actions',
          '@apis': './src/apis',
          '@providers': './src/providers',
        },
      },
    ],
  ],
};

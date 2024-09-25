module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@helper': './src/helper',
          '@assets': './src/assets',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};

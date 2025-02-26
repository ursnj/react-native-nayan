module.exports = {
  presets: [
    'react-native-builder-bob/babel-preset',
    [
      '@babel/preset-react',
      { runtime: 'automatic', importSource: 'nativewind' },
    ],
  ],
};

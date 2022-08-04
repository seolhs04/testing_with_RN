module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/layout': './src/layout',
          '@/constants': './src/constants',
          '@/assets': './src/assets',
          '@/utils': './src/utils',
          '@/apis': './src/apis',
          '@/store': './src/store',
        },
      },
    ],
  ],
};

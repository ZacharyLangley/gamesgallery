module.exports = api => {
  // Shared plugins for all environments
  const sharedPlugins = [
    'react-native-reanimated/plugin',
    'lodash',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ];

  // Production-only plugins
  const productionPlugins = [
    'transform-remove-console',
    'minify-dead-code-elimination',
    'transform-react-constant-elements',
    [
      'transform-react-remove-prop-types',
      {
        removeImport: true,
      },
    ],
  ];

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: sharedPlugins,
    env: {
      production: {
        plugins: [...sharedPlugins, ...productionPlugins],
      },
      development: {
        plugins: sharedPlugins,
      },
    },
  };
};

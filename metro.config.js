const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {},
  },
  transformer: {
    minifierConfig: {
      // For production builds, enable all minification options
      compress: {
        // Remove console statements in production
        drop_console: process.env.NODE_ENV === 'production',
        // Remove unused code
        dead_code: true,
        // Fold constants
        evaluate: true,
        // More aggressive optimizations
        global_defs: {
          __DEV__: false,
        },
      },
      mangle: {
        toplevel: true,
        reserved: [],
      },
      output: {
        ascii_only: true,
        comments: false,
      },
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

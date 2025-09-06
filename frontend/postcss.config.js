export default {
  plugins: {
    'postcss-normalize': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': false,
        'nesting-rules': false
      }
    },
    'autoprefixer': {
      overrideBrowserslist: [
        'Safari >= 12',
        'iOS >= 12',
        'Chrome >= 60',
        'Firefox >= 60',
        'Edge >= 79'
      ]
    },
    'cssnano': {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        colormin: true,
        minifySelectors: true
      }]
    }
  }
}

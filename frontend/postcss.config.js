export default {
  plugins: {
    autoprefixer: {
      // Target Safari 12+ and modern browsers
      overrideBrowserslist: [
        'Safari >= 12',
        'iOS >= 12',
        'Chrome >= 60',
        'Firefox >= 60',
        'Edge >= 79'
      ]
    }
  }
}

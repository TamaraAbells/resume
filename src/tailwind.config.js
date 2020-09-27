const path = require('path')

module.exports = {
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    content (defaultContents) {
      return defaultContents
        .map(p => path.join('src/', p))
    }
  }
}

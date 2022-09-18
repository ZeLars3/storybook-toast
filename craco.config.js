const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@': resolvePath(__dirname, 'src'),
      '@components': resolvePath(__dirname, './src/components'),
      '@assets': resolvePath(__dirname, './src/assets'),
      '@constants': resolvePath(__dirname, './src/constants'),
      '@utils': resolvePath(__dirname, './src/utils'),
      '@containers': resolvePath(__dirname, './src/containers'),
      '@styles': resolvePath(__dirname, './src/styles'),
    },
  }
}

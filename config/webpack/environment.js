const { environment } = require('@rails/webpacker')

const path = require('path')

// Define alias for path
const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
    }
  }
}

// Initiate custom path alias in config
environment.config.merge(customConfig);

// Enable split chunks -> once browser downloads common dependencies/chunk files, they will be cached locally to avoid re-downloading
environment.splitChunks()

module.exports = environment

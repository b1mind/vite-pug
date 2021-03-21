const autoprefixer = require('autoprefixer')
const combineMediaQuery = require('postcss-combine-media-query')

module.exports = {
  plugins: [autoprefixer(), combineMediaQuery()],
}

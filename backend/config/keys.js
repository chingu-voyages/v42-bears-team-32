let keys
import prod from './prod.js'
import dev from './dev.js'

if (process.env.NODE_ENV === 'production') {
  keys = prod
} else if (process.env.NODE_ENV === 'ci') {
    // keys = require('./ci')
} else {
  keys = dev
}

export default keys

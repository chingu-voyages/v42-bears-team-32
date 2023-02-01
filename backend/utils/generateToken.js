import jwt from 'jsonwebtoken'
import keys from '../config/keys.js'
const generateToken = (id) => {
  return jwt.sign({ id }, keys.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken
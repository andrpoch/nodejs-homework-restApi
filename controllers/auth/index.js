const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resentVerifyEmail = require('./resentVerifyEmail')
const login = require('./login');
const getCurrent = require('./getCurrent')
const updateAvatar = require('./updateAvatar')
const logout = require('./logout')

module.exports = {
   register,
   verifyEmail,
   resentVerifyEmail,
   login,
   getCurrent,
   updateAvatar,
   logout
}
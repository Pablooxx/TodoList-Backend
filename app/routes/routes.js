
const { registerCtrl } = require('../controllers/auth');

module.exports = (router) => {
    router.post('/register', registerCtrl)
}
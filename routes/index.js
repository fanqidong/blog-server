const admin = require('./admin')
const router = (app) => {
    app.use('/admin', admin)
}
module.exports = router
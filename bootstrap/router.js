const router = require('../app/routes');

module.exports = (app) => {
    app.use('/', router);
}
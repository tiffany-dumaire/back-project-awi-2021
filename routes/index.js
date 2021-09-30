module.exports = function(app){
    app.use('/users',require('./user.route'));
    app.use('/api/auth',require('./auth.route'));
}
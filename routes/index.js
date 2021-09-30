module.exports = function(app){
    app.use('/users',require('./user.route'));
    //app.use('/auth',require('./auth.route'));
}
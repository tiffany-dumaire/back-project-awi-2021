module.exports = function(app){
    app.use('/users',require('./user.route'));
}
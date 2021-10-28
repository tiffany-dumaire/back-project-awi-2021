module.exports = function(app){
    app.use('/users',require('./user.route'));
    app.use('/ingredients',require('./ingredient.route'));
}
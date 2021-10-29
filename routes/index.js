module.exports = function(app){
    app.use('/users', require('./user.route'));
    app.use('/ingredients', require('./ingredient.route'));
    app.use('/categories', require('./categorie.route'));
    app.use('/categories_allergenes', require('./categorie_allergenes.route'));
}
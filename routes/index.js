module.exports = function(app){
    app.use('/ingredients', require('./ingredient.route'));
    app.use('/categories', require('./categorie.route'));
    app.use('/categories_allergenes', require('./categorie_allergenes.route'));
    app.use('/categories_fiches', require('./categorie_fiches.route'));
    app.use('/phases', require('./phase.route'));
    app.use('/fiches_techniques', require('./fiche_technique.route'));
    app.use('/responsables', require('./responsable.route'));
}
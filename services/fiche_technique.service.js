exports.etiquetteAvecIngredients = (result) => {
    let infosFiche = {
        id_fiche_technique: result[0].id_fiche_technique,
        libelle_fiche_technique: result[0].libelle_fiche_technique,
        nombre_couverts: result[0].nombre_couverts,
        ingredients: []
    }

    result.forEach((row) => {
        if (row.code !== null) {
            infosFiche.ingredients.push({
                code: row.code,
                libelle: row.libelle,
                stock: row.stock,
                quantite_ingredient: row.quantite_ingredient === null ? 0 : row.quantite_ingredient
            });
        }
        
    });
    return infosFiche;
};

exports.fiche = (result) => {
    let infosFiche = {
        //
    }
};
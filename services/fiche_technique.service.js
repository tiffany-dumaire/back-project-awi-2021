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

exports.etiquettesAvecIngredients = (result) => {
    let idsFiche = [];
    let fiches = [];

    result.forEach((row) => {
        if (!idsFiche.includes(row.id_fiche_technique)) idsFiche.push(row.id_fiche_technique);
    });

    idsFiche.forEach((id_fiche_technique) => {
        let ficheAEtiquetter = []
        result.forEach((row) => {
            if(id_fiche_technique == row.id_fiche_technique){
                ficheAEtiquetter.push(row);
            }
        });
        fiches.push(this.etiquetteAvecIngredients(ficheAEtiquetter));
    });

    return fiches;
}

exports.fiche = (result) => {
    let infosFiche = {
        id_fiche_technique: result[0].id_fiche_technique,
        libelle_fiche_technique: result[0].libelle_fiche_technique,
        nombre_couverts: result[0].nombre_couverts,
        intitule_responsable: result[0].intitule_responsable,
        phases: []
    }

    result.forEach((row) => {
        let phase = (element) => element.id_phase === row.id_phase;
        const index = infosFiche.phases.findIndex(phase);
        if (index === -1) {
            infosFiche.phases.push({
                id_phase: row.id_phase,
                libelle_phase: row.libelle_phase,
                libelle_denrees: row.libelle_denrees,
                description_phase: row.description_phase,
                duree_phase: row.duree_phase,
                ordre: row.ordre,
                ingredients: []
            });
        }
        if (row.code !== null) {
            infosFiche.phases[infosFiche.phases.length - 1].ingredients.push({
                code: row.code,
                libelle: row.libelle,
                unite: row.unite,
                prix_unitaire: row.prix_unitaire,
                allergene: row.allergene,
                quantite: row.quantite
            });
        }
    });

    return infosFiche;
};
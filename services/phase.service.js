/**
 * Formatter les phases avec ingrédients
 * @param {*} result 
 * @returns 
 */
exports.phasesWithIngredients = (result) => {
    let phases = [];

    result.forEach((row) => {
        let codeToSearch = (element) => element.id_phase === row.id_phase;
        let index = phases.findIndex(codeToSearch);
        if (index === -1) {
            phases.push({
                id_phase: row.id_phase,
                libelle_phase: row.libelle_phase,
                ingredients: []
            });
        }
        if (row.id_phase_ingredient !== null) {
            phases[phases.length - 1].ingredients.push({
                id_phase_ingredient: row.id_phase_ingredient,
                libelle: row.libelle,
                quantite: row.quantite === null ? 0 : row.quantite
            });
        }
            
    });

    return phases;
};

/**
 * Formatter une phase
 * @param {*} result 
 * @returns 
 */
exports.phase = (result) => {
    let infosPhase = {
        id_phase: result[0].id_phase,
        libelle_phase: result[0].libelle_phase,
        libelle_denrees: result[0].libelle_denrees,
        description_phase: result[0].description_phase,
        duree_phase: result[0].duree_phase,
        ingredients: []
    }

    result.forEach((row) => {
        if (row.code !== null) {
            infosPhase.ingredients.push({
                code: row.code,
                libelle: row.libelle
            });
        }  
    });

    return infosPhase;
};
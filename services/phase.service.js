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
                quantite: 0
            });
        }
            
    });

    return phases;
};
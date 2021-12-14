const model = require('../models/responsable.model');

exports.getResponsables = (res) => {
    model.getResponsables(res);
}
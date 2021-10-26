const user = require('../../models/user.model');
const bcrypt = require ('bcrypt'); 

exports.post = (req,res) => {
    let body = req.body;
    if (body.user_email !== undefined && body.password !== undefined && body.prenom !== undefined && body.nom !== undefined && body.username !== undefined) {
        
    }
}
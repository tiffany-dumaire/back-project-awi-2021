module.exports = class User {
    constructor(user_id,username,user_email,password,prenom,nom){
        this.user_id = user_id;
        this.username = username;
        this.user_email = user_email;
        this.password = password;
        this.prenom = prenom;
        this.nom = nom;
    }
}
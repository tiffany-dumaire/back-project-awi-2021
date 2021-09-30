module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      }
    });
  
    return User;
};
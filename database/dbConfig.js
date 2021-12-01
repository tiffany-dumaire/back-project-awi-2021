var mysql = require('mysql');

exports.connect = function(done){
    done(null);
}

var connectionPool = null;

exports.getConnection = () => {
    if (!connectionPool){
        connectionPool = mysql.createPool({
            connectionLimit: 10,
            host     : 'mysql-awi-dumaire.alwaysdata.net',
            user     : '243951_awi',
            password : 'ProjetSEP-2020',
            database : 'awi-dumaire_2021'
        });      
   }
   return connectionPool;
}

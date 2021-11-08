var mysql = require('mysql');

exports.connect = function(done){
    done(null);
}

var connectionPool = null;

exports.getConnection = () => {
    if (!connectionPool){
        connectionPool = mysql.createPool({
            connectionLimit: 10,
            host     : process.env.MYSQL_HOST,
            user     : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        })      
   }
   return connectionPool;
}

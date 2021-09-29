var mysql = require('mysql');

var connection = null;

exports.connect = function(done){
    done(null);
}

var connectionPool = null;

function getConnection(){
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

exports.queryData = function(request,callback){
    getConnection().query(request,function(err,result){
        if(err) console.log(err);
        callback(result);
    });
}

exports.queryAll = function(table,callback){
    this.queryData(`SELECT * FROM ${table}`, callback);
}

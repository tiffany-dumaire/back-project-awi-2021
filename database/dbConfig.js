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
            host     : 'mysql-awi-dumaire.alwaysdata.net',
            user     : '243951_awi',
            password : 'ProjetSEP-2020',
            database: 'awi-dumaire_2021'
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

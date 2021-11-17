const db = require('../database/dbConfig');

/*** Requêtes communes à tous les models ***/

/** Requête à écrire en dure **/

/**
 * 
 * @param {*} request 
 * @param {*} callback 
 */
exports.queryData = (request, callback) => {
    db.getConnection().query(request, (err, result) => {
        if(err) console.log(err);
        callback(result);
    });
}

/** GET **/

/**
 * 
 * @param {*} table 
 * @param {*} callback 
 */
exports.queryAll = (table, callback) => {
    this.queryData(`SELECT * FROM ${table}`, callback);
}

/** POST **/

var val2val = function(val){
    if(typeof(val)=='string'){
        val = '"'+val+'"';
    }
    return val;
}

var mapinsertvalues = (values) => {
    var keys = Object.keys(values);
    var setvalue = "(";
    for(i=0;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ 
            if(i>0) { setvalue += ", "; } 
            setvalue += keys[i];
        }
    }
    setvalue += ") VALUES (";
    for(i=0;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ 
            if(i>0) { setvalue += ", "; } 
            setvalue += `${val2val(values[keys[i]])}`;
        }
    }
    setvalue += ");";
    return setvalue;
}

var mapinsertallvalues = (values) => {
    var key = Object.keys(values);
    var setvalue = "";
    for (j = 0; j < key.length; j++) {
        var keys = Object.keys(values[key[j]]);
        if (j == 0) {
            setvalue += "(";
            for(i=0;i<keys.length;i++){
                if (keys[i].slice(0,1) != "_"){ 
                    if(i>0) { setvalue += ", "; } 
                    setvalue += keys[i];
                }
            }
            setvalue += ") VALUES (";
        } else {
            setvalue += ", ("
        }
        for(i=0;i<keys.length;i++){
            if (keys[i].slice(0,1) != "_"){ 
                if(i>0) { setvalue += ", "; } 
                setvalue += `${val2val(keys[i])}`;
            }
        }
        setvalue += ")";
    }
    console.log(setvalue);
    return setvalue;
}

exports.insertValue = (table, values, callback) => {
    var req = `INSERT INTO ${table} ${mapinsertvalues(values)}`;
    this.queryData(req,callback);
}

exports.insertAllValues = (table, values, callback) => {
    var k = Object.keys(values);
    var req = `INSERT INTO ${table} ${mapinsertallvalues(values)}`;
    this.queryData(req,callback);
}

exports.deleteValue = (table, key, keyval, callback) => {
    this.queryData(`DELETE FROM ${table} WHERE ${key}=${val2val(keyval)}`,callback);
}
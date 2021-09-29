// ----------- express init
const express = require('express');
const app = express();

// ----------- modules ajoutés pour le login
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

// ----------- cors : Accepter les requêtes d'un autre domaine
const cors = require('cors')

var corsOptions = { // les entrées ne viendront que de : 
    origin: process.env.ORIGIN || "",
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}; 

// ----------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`Serveur à l'écoute sur le port ${port} !`); 
});
 
// ----------------------------------------------------
//app.use(cors());
app.use(cors(corsOptions)); //Activation du CORS avec entrées sur le corsOption
app.use(morgan('tiny')); //Activation de Morgan
app.use(express.json()); //Activation du raw (json)
app.use(express.urlencoded({ extended: true })) // Activation de x-wwww-form-urlencoded

app.get('/', function (req, res) {
    res.send('🚀Le serveur est actuellement à l\'écoute');
});

app.get("/api",(req,res) =>{
    res.json({
        success:1,
        message:"This is rest api working"
    });
});

// ----------------------------------------------------

require('./routes')(app);

// ----------------------------------------------------

// connection.end();
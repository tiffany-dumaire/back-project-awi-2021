const express = require('express');
const app = express();

const cors = require('cors')

var corsOptions = { 
    origin: "http://localhost:4000" || "", 
    optionsSuccessStatus: 204 
}; 

const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`Serveur à l'écoute sur le port ${port} !`); 
});

app.use(cors(corsOptions)); 
app.use(express.json()); 

app.use(express.urlencoded({ extended: true })) 

app.get('/', function (req, res) {
    res.send(`🚀Le serveur est actuellement à l'écoute`);
});

app.get("/api",(req,res) =>{
    res.json({
        success:1,
        message:"This is rest api working"
    });
});

require('./routes')(app);

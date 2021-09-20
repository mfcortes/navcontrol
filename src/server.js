const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes/routes');

const app = express();

app.set('port',process.env.PORT || 9000);

const dboptions = {
    host:'localhost',
    port: 3306,
    user: 'traccaruser',
    password: 'tracarpassword',
    database: 'traccar'

}


//middleware 
app.use(myconn(mysql,dboptions, 'single'));
app.use(express.json());

app.use('/api',routes);


// Rutas
app.get('/',(req,res)=>{
    res.send("Aplicacion de monitoreo de lanchas version 1.eee0")
});




// Server runing
app.listen(app.get('port'),()=>{
  console.log('Server arriva', app.get('port')) ;
})
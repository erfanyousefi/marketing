const express = require('express');
const app = express();


//request config
require('./bootstrap/request')(app);

//.env config
require('./bootstrap/dotenv')


//database config
require('./app/models')


//routing config
require('./bootstrap/router')(app);

//not found config
require('./bootstrap/not_found')(app);

//Error handler
require('./bootstrap/error_handler')(app);

//listening config
require('./bootstrap/listening')(app);
require('dotenv').config(); // --> process.env

const express = require( 'express' );

const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;
const app = express();
var server = app.listen( PORT, function(){ console.log( `[The Habbit], http://localhost:${PORT}` ); });

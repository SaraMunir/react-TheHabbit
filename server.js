require('dotenv').config(); 
const express = require( 'express' );
const path = require("path");
const orm = require( './db/orm.mongoose' );
const PORT = process.env.PORT || 8080;
const app = express();

//middleware that reads incoming JSON objects
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//built-in middleware function used to server static files
app.use(express.static( path.join(__dirname, "build")) );

// Start the API server
app.listen(PORT, () =>
  console.log(`[Habbit]. Running on PORT: ${PORT}!`)
);


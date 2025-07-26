const express = require('express');
const songRoutes = require('./Router/Song.Routers')

const app = express();  //create the server this step 
app.use(express.json()) // work only for the row formate 


app.use('/',songRoutes)


module.exports = app;
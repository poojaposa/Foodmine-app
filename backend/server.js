const express = require("express");
const path = require("path")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const port = process.env.PORT || 4000;
const app = express();


app.get("/",(req,res)=>{
    console.log("hiiii");
    res.send("helooooo")
});


app.listen(port,()=>{
    console.log("listining on port ...4000..........");
})
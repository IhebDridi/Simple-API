//necessary
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//unecessary
const bodyParser = require("body-parser");
const cors = require("cors");


//MiddleWares
//Cors for cross platforming
app.use(cors());
//the request will send an undefined, this will convert it to JSON
app.use(bodyParser.json());

//To hide the mongodb informations used to connect
require('dotenv/config');

//Imported Routes
const UsersRoutes = require("./ROUTES/Users");

//ROUTES
app.use("/api/users", UsersRoutes);

/*
app.use('/api/users', () => {
    console.log("this is the middleware");
});*/

//Routes
/*
app.get("/", (req, res) => {
    res.status(200).send("We are home");
});

app.get("/api/users", (req, res) => {
    res.status(200).send("The users");
});*/

//Connecting to the mongoDB database
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true  },
 () =>{
    console.log("Connected to DB...")
});

//Listening/booting the server
app.listen(3000);
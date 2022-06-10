//dependencies
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require('dotenv').config()

//database
mongoose.connect(process.env.mongoURI, { useNewUrlParser: true });
mongoose.connection.on('error', (error) => {console.error(error)});
mongoose.connection.once('open', () => {console.log('MongoDB connected')});

//middleware
app.use(express.json());



app.listen(3000, () => {
    console.log("Express.js is online")
});
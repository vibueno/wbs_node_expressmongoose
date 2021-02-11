const dotenv = require("dotenv");
// init of dotenv
dotenv.config();

const { PORT, DBHOST, DBNAME, DBUSER, DBPASS } = process.env;

const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/Student");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const mongoDB = `mongodb+srv://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/students", studentRoutes);

app.listen(PORT, () => console.log("server running on port 3000"));

//dependencies
require("dotenv").config(); // brings in .env vars
const express = require("express"); // web framework
const morgan = require("morgan"); // logger
const methodOverride = require("method-override"); // to swap request methods
const session = require("express-session"); // session middleware
const MongoStore = require("connect-mongo"); // save sessions in mongo
const liquid = require("liquid-express-views");
const path = require("path");
const viewsFolder = path.resolve(__dirname, "views/");
const app = liquid(express(), { root: viewsFolder });

const mongoose = require("mongoose");
const db = mongoose.connection;
require("dotenv").config({ path: `.env` });
mongoose.Promise = global.Promise;
const mongoURI = process.env.DATABASE_URL;
//middleware
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// Dependencies

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("The connection with mongod is established");
  }
);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));
const CalendarEvent = require("./models/CalendarEvent");
// route
app.get("/calendar", (req, res) => {
  res.render("calendar.liquid");
});
app.post("/calendar", (req, res) => {
  const { user, date, location, time } = req.body;
});
app.get("/calendar/create-event", (req, res) => {
  res.render("new.liquid");
});

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

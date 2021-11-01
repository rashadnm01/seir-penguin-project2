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

app.post("/calendar", (req, res) => {
  CalendarEvent.create(req.body).then((data) => {
    res.redirect("/calendar");
  });
});
app.get("/calendar/create-event", (req, res) => {
  res.render("new.liquid");
});

app.get("calendar/:date", (req, res) => {
  const date = req.params.date;
  const calEvent = CalendarEvent.find({ date: date });
  res.render("show-event.liquid", { calEvent });
});
app.get("/calendar", (req, res) => {
  const CalendarEvents = CalendarEvent.find({});
  res.render("calendar.liquid", { CalendarEvents: CalendarEvents });
});
// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

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

//middleware
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    resave: false,
    saveUninitialized: true,
  })
);
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

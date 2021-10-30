//dependencies
require("dotenv").config(); // brings in .env vars
const express = require("express"); // web framework
const morgan = require("morgan"); // logger
const methodOverride = require("method-override"); // to swap request methods
const session = require("express-session"); // session middleware
const MongoStore = require("connect-mongo"); // save sessions in mongo
const app = express();
app.set("view engine", "html");

app.engine("html", require("ejs").renderFile);
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
// route
app.get("/calendar", (req, res) => {
  res.render("calendar.html");
});

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

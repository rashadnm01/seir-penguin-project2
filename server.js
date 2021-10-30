///////////////////////////////////
// Import our Dependencies
///////////////////////////////////
require("dotenv").config(); // brings in .env vars
const express = require("express"); // web framework
const morgan = require("morgan"); // logger
const methodOverride = require("method-override"); // to swap request methods
const session = require("express-session"); // session middleware
const MongoStore = require("connect-mongo"); // save sessions in mongo
const app = express();
app.set("view engine", "html");

app.engine("html", require("ejs").renderFile);

/////////////////////////////////////////////
// Register Our Middleware
/////////////////////////////////////////////
// logging
app.use(morgan("tiny"));
// ability to override request methods
app.use(methodOverride("_method"));
// ability to parse urlencoded from for submission
app.use(express.urlencoded({ extended: true }));
// setup our public folder to serve files statically
app.use(express.static("public"));
// middlware to create sessions (req.session)
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

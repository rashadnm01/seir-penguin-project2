const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const app = express();

// route
app.get("/", (req, res) => {
  res.send("This App is working");
});

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

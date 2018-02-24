
// npm packages
var express = require("express");
var bodyParser = require("body-parser");

// Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: ");
});
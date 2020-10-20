// requires express and saves it as a variable
var express = require("express");
// initializes express server and saves it as a variable
var app = express();

// set app to listen to port 3000 and create callback function that confirms server is running and on what port
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

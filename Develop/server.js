// ========= PACKAGES ============ \\
const express = require("express");
const mongoose = require("mongoose");
//MORGAN HOOKS INTO ROUTES & CONSOLE.LOGS REQ & RES
const logger = require("morgan");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

//LOGGER WILL THROW ERROR ON LOGGING REQUESTS
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//CONNECT TO MONGOOSE/MONGODB
//https://mongoosejs.com/docs/connections.html
//https://mongoosejs.com/docs/connections.html#error-handling
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //.CATCH HANDLES INITIAL CONNECTION ERRORS
  })
  .catch((error) => handleError(error));

mongoose.connection
  //SUCCESSFULLY CONNECTED NOTIFICATION
  .once("open", () => console.log("We're connected!!"))
  //LISTENS FOR ERROR EVENTS ON CONNECTION
  .on("error", (err) => {
    logError(err);
  });

//START SERVER  
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}/ !`);
});
// ========= PACKAGES ============ \\
const express = require("express");
const mongoose = require("mongoose");
//MORGAN HOOKS INTO ROUTES & CONSOLE.LOGS REQ & RES
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();


//LOGGER WILL THROW ERROR ON LOGGING REQUESTS
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//ROUTES
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/apiRoutes"));
// app.use(require("./routes/api"));

//CONNECT TO MONGOOSE/MONGODB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //.CATCH HANDLES INITIAL CONNECTION ERRORS
  })
  .catch((error) => handleError(error));

mongoose.connection
  .once("open", () => console.log("Ready!"))
  //LISTENS FOR ERROR EVENTS ON CONNECTION
  .on("error", (err) => {
    logError(err);
  });

//ROUTES
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/apiRoutes"));
// app.use(require("./routes/api"));


app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}/ !`);
});
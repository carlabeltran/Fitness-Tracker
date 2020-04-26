// ========= PACKAGES/DEPENDENCIES ============ \\
const express = require("express");
const mongoose = require("mongoose");
//HOOKS INTO ROUTES & CONSOLE.LOG REQ & RES
const logger = require("morgan");

//SET HOST PORT OR 3000
const PORT = process.env.PORT || 3000;

//INITIATE EXPRESS APP
const app = express();

//LOGGER WILL THROW ERROR ON LOGGING REQUESTS
app.use(logger("dev"));
//PARSE REQUEST BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//MAKE PUBLIC FOLDER A STATIC DIRECTORY
app.use(express.static("public"));

//CONNECT TO MONGOOSE/MONGODB
//https://mongoosejs.com/docs/connections.html
//https://mongoosejs.com/docs/connections.html#error-handling
//https://mongoosejs.com/docs/index.html

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch(error => handleError(error));

//MONGOOSE CONNECTION STORED IN VARIABLE DB
mongoose.connection.on("error", (error) => {
  console.log("Mongoose Connection Error!: ", error);
}).once("open", () => console.log("Mongoose Connection Successful!!"));

const db = require("./models");

//ROUTES-EVERY REQUEST GOES THROUGH ROUTE MIDDLEWARE
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//START SERVER  
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}/ !`);
});
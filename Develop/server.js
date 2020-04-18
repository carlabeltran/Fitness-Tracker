// ========= PACKAGES ============ \\
const express = require("express");
const mongoose = require("mongoose");
//MORGAN HOOKS INTO ROUTES & CONSOLE.LOGS REQ & RES
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

//LOGGER WILL THROW ERROR ON LOGGING REQUESTS
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTES
app.use(require("./routes/api.js"));

//CONNECT TO MONGOOSE/MONGODB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

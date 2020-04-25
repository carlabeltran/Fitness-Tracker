console.log("htmlRoutes Connected!!");
//*********** HTML ROUTES ****************\\
const path = require("path");

module.exports = function(app) {
    // INDEX HTML FILE
    app.get("/", (req, res) => {
        console.log("ROOT ROUTE!!");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // EXERCISE HTML FILE
    app.get("/exercise", (req, res) => {
        console.log("EXERCISE ROUTE!!");
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // STATS HTML FILE
    app.get("/stats", (req, res) => {
        console.log("STATS ROUTE!!");
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
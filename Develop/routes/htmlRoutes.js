console.log("htmlRoutes Connected!!");
//*********** HTML ROUTES ****************\\
const path = require("path");

module.exports = function(app) {
    // EXERCISE HTML FILE
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
        console.log("EXERCISE ROUTE!!");
    });
    // INDEX HTML FILE
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
        console.log("ROOT ROUTE!!");
    });
    // STATS HTML FILE
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
        console.log("STATS ROUTE!!");
    });
};
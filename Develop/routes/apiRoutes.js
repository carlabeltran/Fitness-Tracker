console.log("apiRoutes Connected!!");
//*********** API ROUTES ****************\\
const db = require("../models")
module.exports = function(app) {
    
    //*********** EXERCISE ****************\\
    //APP POST
    app.post("/submit", ({ body }, res) => {
        console.log(body);
        db.Workout.create(body)
            .then((newExercise) => {
                console.log(newExercise);
                return db.Workout.findOneAndUpdate(
                    {},
                    { $push: { exercises: newExercise._id } }, { new: true })
            }).then(dbWorkout => {
                res.json(newExercise);
            })
                .catch((err) => {
                    res.status(400).json(err);
                });
    });
    //APP GET
    app.get("/api/workouts/", function (req, res) {
        db.Exercise.find().then((data) => {
            res.json(data);
            console.log("Request succeeded with JSON response", data);
        });
    });


}
console.log("apiRoutes Connected!!");

//*********** API ROUTES ****************\\
const db = require("../models");

module.exports = function(app) {
    
    //*********** EXERCISE ****************\\
    //GET
    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
            console.log("Request succeeded with JSON response:", data);
        }).catch(findError => {
            console.log("Request succeeded with JSON response:", findError);
        });

    });
    


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

};
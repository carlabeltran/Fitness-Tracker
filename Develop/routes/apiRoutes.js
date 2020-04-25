console.log("apiRoutes Connected!!");

//*********** API ROUTES ****************\\
const db = require("../models");

module.exports = function (app) {
    
    //*********** EXERCISE ****************\\
    //GET
    //RETRIVING THE LAST WORKOUT FROM API.JS
    app.get("/api/workout", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
            console.log("APIROUTES.JS: FIND DATA SUCCESS!!!: ", data);
            //CATCH ERROR 
        }).catch(findError => {
            console.log("APIROUTES.JS: FIND ERROR!!!: ", findError);
        });

    });

    //CREATING A NEW WORKOUT IN THE WORKOUT DATABASE
    app.post("/api/workout", async (req, res) => {
        try {
            
            const res = await db.Workout.create({ type: "workout" })
            
            res.json(res);
        }
        catch (workoutCreateError) {

            // console.log("Error occurred creating a workout: ", workoutCreateError);
            
            res
                .status(400)
                .json("APIROUTES.JS:CREATE WORKOUT ERROR!!!: ", workoutCreateError);
        }
    });


    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body, params);
        const workoutId = params.id;
        let storedExercises = [];

        db.Workout.find({ _id: workoutId }).then(dbWorkout => {
            console.log(dbWorkout);
            storedExercises = dbWorkout[0].exercices;
            res.json(dbWorkout[0].exercices);
            let allExercises = [storedExercises, body]
            console.log(allExercises);
            updateWorkout(allExercises)
        }).catch(err => {
            res.json(err);
        })
    });

};
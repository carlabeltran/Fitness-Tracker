console.log("apiRoutes Connected!!");
//*********** API ROUTES ****************\\
const db = require("../models");

module.exports = function (app) {
    
    //*********** EXERCISE ****************\\
    //GET
    //RETRIVING THE LAST WORKOUT FROM API.JS
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
            console.log("APIROUTES.JS: FIND DATA SUCCESS!!!: ", data);
        })
            //CATCH ERROR 
            .catch(findError => {
            
                res.json(findError);

                console.log("APIROUTES.JS: FIND LAST WORKOUT ERROR!!!: ", findError);
                
            });

    });

    //CREATING A NEW WORKOUT IN THE WORKOUT DATABASE
    app.post("/api/workout", async (req, res) => {
        try {
            
            const res = await db.Workout.createWorkout({ type: "workout" })
            
            res.json(res);
        }
        catch (workoutCreateError) {

            console.log("APIROUTES.JS:CREATE NEW WORKOUT ERROR!!!: ",
                workoutCreateError
            );
        
        }
    });

    //API.JS:ADDING EXERCISE TO A WORKOUT
    app.put("/api/workouts/:id", async ({ body, params }, res) => {
        
        console.log(body, params);
        
        const workoutId = params.id;
        
        let savedExercises = [];

        //RETRIEVES ALL SAVED EXERCISE TO CURRENT WORKOUT
        db.Workout.find({ _id: workoutId })
            .then(dbWorkout => {
            
                console.log(dbWorkout);
            
                savedExercises = dbWorkout[0].exercises;
            
                res.json(dbWorkout[0].exercises);
            
                const allExercises = [...savedExercises, body];
            
                console.log(allExercises);
            
                // updateWorkout(allExercises)
            })
            .then(db.Workout.findByIdAndUpdate(workoutId, { exercises: body }))
            .catch(err => {
                res.json(err);
            });
    });

};
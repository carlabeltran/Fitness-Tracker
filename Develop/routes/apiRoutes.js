console.log("apiRoutes Connected!!");
//*********** API ROUTES ****************\\
const Workout = require("../models/workout");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find().then(data => {
            res.json(data)
            // console.log("APIROUTES.JS: FIND DATA SUCCESS!!!: ", data);
        }).catch(err => {
            res.json(err)
            // console.log("APIROUTES.JS: FIND LAST WORKOUT ERROR!!!: ", err);
        })
    });
    app.post("/api/workouts", function (req, res) {
        Workout.create({ type: "workout" }).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
            // console.log("APIROUTES.JS:CREATE NEW WORKOUT ERROR!!!: ", err);
        })
    });
    app.get("/api/workouts/range", function (req, res) {
        Workout.find().then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        });
        app.post("/api/workouts/range", function (req, res) {
            Workout.create({}).then(data => {
                res.json(data)
            }).catch(err => {
                res.json(err)
            })
        });
        app.put("/api/workouts/:id", ({ body, params }, res) => {
            // console.log(body, params);
            Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
                .then(data => {
                    res.json(data)
                })
                .catch(err => {
                    res.json(err)
                });
        })
    })
};
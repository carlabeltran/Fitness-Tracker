//https://mongoosejs.com/docs/guide.html#models

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//DEFINE SCHEMA
const WorkoutsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true,"Name required"]
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});

//COMPLILE MODEL
const Workouts = mongoose.model("Workouts", WorkoutsSchema);

//EXPORT
module.exports = Workouts;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define a schema
const ExerciseSchema = new Schema({
    
    day: {
    type: Date,
    default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type",
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name",
            },
            difficulty: {
                type: String,
                trim: true,
                default: "easy",
            },
            description: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number,
                required: "Enter duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]

});

// compile our model
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

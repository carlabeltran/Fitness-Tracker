const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//DEFINE SCHEMA
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//COMPLILE MODEL
const Workout = mongoose.model("Workout", workoutSchema);

//EXPORT
module.exports = Workout;
const workoutTypeEl = document.querySelector("#type");

init();

async function init() {
  if (location.pathname.includes("/exercise") && location.search.split("=")[1] === undefined) {
    console.log(exercise);
    const newWorkout = await API.createWorkout();
    const workout = await API.getLastWorkout();
    if (workout) {
        location.search = "?id=" + workout._id;
    } else {
      newWorkout.classList("");
      // document.querySelector("#continue-btn").classList.add("d-none");
    }
    return console.log(newWorkout);
    }
};


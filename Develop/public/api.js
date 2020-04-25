//https://mongoosejs.com/docs/middleware.html#synchronous
  
//API VARIABLE
  const API = {
    //ASYNC FUNCTION LAST WORKOUT
    async getLastWorkout() {
      
      //RESPONSE VARIABLE
      let res;
      
      try {
        
        // AWAIT RESPONSE OF FETCH CALL
        res = await fetch("/api/workouts");
      }
      //CATCH ERROR 
      catch (getLastWorkoutError) {
        
        //LOG ERROR
        console.log(getLastWorkoutError);
      }
      
      //AWAITING JSON VERSION RESPONSE
      const json = await res.json();
      
      //LOGGING VALUE OF JSON VARIABLE
      console.log("API.JS Get Last Workout Success!!!: " , json);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json[json.length - 1];
    },
    //ASYNC FUNCTION ADD EXERCISE
    async addExercise(data) {
      
      //LOG DATA
      console.log("API.JS ADD EXERCISE DATA: ", data);
    
      const id = location.search.split("=")[1];

      const res = await fetch(`/api/workouts/` + id, {
        
        //*GET, POST, PUT, DELETE, etc.
        method: "PUT",

        //'Content-Type': 'application/x-www-form-urlencoded',
        headers: { "Content-Type": "application/json" },

        //DATA TYPE MUST MATCH CONTENT TYPE HEADER
        body: JSON.stringify(data),

      });

      const json = await res.json();
      
      console.log("API.JS: Add Exercise Success!!!: " , json);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
    //ASYNC FUNCTION CREATE WORKOUT
    async createWorkout(data = {}) {
      
      const res = await fetch(`/api/workouts`, {
        
        method: "POST",
        
        body: JSON.stringify(data),
        
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      
      console.log("API.JS: Create Workout Success!!!: " ,json);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
    //ASYNC FUNCTION GET WORKOUTS IN RANGE
    async getWorkoutsInRange() {
      
      //GET REQUEST & SAVE RES IN VARIABLE
      const res = await fetch(`/api/workouts/range`);
    
      //AWAITING JSON VERSION RESPONSE
      const json = await res.json();
      
      //
      console.log("API.JS: Get Workout Range Success!!!: ", json);
    
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
  };

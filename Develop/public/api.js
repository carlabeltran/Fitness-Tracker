//https://mongoosejs.com/docs/middleware.html#synchronous
  
//API VARIABLE
  const API = {
    //ASYNC FUNCTION LAST WORKOUT
    async getLastWorkout() {
      
      //RESPONSE VARIABLE
      let res;
      
      try {
        
        // AWAIT RESPONSE OF FETCH CALL
        res = await fetch("/api/workout");
      }
      //CATCH ERROR 
      catch (err) {
        
        //LOG ERROR
        console.log(err);
      }
      
      //AWAITING JSON VERSION RESPONSE
      const json = await res.json();
      
      //LOGGING VALUE OF JSON VARIABLE
      console.log("Request succeeded with JSON response", data);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json[json.length - 1];
    },
    //ASYNC FUNCTION ADD EXERCISE
    async addExercise(data) {
      
      //LOG DATA
      console.log("Request succeeded with JSON response", data);
    
      const id = location.search.split("=")[1];

      const res = await fetch("/api/workout/" + id, {
        //*GET, POST, PUT, DELETE, etc.
        method: "PUT",

        //'Content-Type': 'application/x-www-form-urlencoded',
        headers: { "Content-Type": "application/json" },

        //DATA TYPE MUST MATCH CONTENT TYPE HEADER
        body: JSON.stringify(data),
      });

      const json = await res.json();
      
      console.log("Request succeeded with JSON response", data);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
    //ASYNC FUNCTION CREATE WORKOUT
    async createWorkout(data = {}) {
      
      const res = await fetch("/api/workout", {
        
        method: "POST",
        
        body: JSON.stringify(data),
        
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      
      console.log(json);
      
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
    //ASYNC FUNCTION GET WORKOUTS IN RANGE
    async getWorkoutsInRange() {
      
      //GET REQUEST & SAVE RES IN VARIABLE
      const res = await fetch(`/api/workout/range`);
    
      //AWAITING JSON VERSION RESPONSE
      const json = await res.json();
      //
      console.log(json);
    
      //ONLY PROCEED ONCE PROMISE RESOLVED
      return json;
    },
  };

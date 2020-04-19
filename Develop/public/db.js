let db;

//CREATE A NEW DB INSTANCE
const request = window.indexedDB.open("fitnesstracker", 1);


request.onupgradeneeded({ target }) => {
    const db = target.result;

    const objectStore = db.createObjectStore("fitnesstracker")
    //column ( name , key path)
    objectStore.createIndex("timestamp", "timestamp");
};

request.onsuccess = event => {
    console.log(request.result);
};




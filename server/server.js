const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4002;
const db = require("./database/db");

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


const getApiAndEmit = async socket => {
    socket.emit("FromAPI", {Data: "data"})
};


/**
 * Sending Updated Data every 1 sec .. just to fake the Real-Life Data
 */
io.on('connection', (socket) => {
    console.log("New client connected");
    setInterval(() => {
        socket.emit('dataUpdated', updateDBVehicles(db))
    }, 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

// Manipulating Data to send Fake Status

/**
 * Taks the jsonData base and adding random status every time this API calls
 * @param db  // Data base Json Object
 * @returns db // the updaded Data base with random Status
 *
 */
let updateDBVehicles = (db) => {
    let vehiclesJson = [];
    if (db.vehicles) {
        db.vehicles.forEach((ele) => {
            ele.status = getRandomStatus();
            vehiclesJson.push(ele);
        });
    }
    return db
};

/**
 * creating a random function that returns a string of Active or not-active
 * @returns {string}
 */
let getRandomStatus = () => {
    let randomNumber = Math.random();
    if (randomNumber >= 0.5)
        return "is-active";
    else
        return "not-active";
};

server.listen(port, () => console.log(`Listening on port ${port}`));

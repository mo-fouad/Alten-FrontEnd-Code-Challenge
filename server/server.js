
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require('cors');
const port = process.env.PORT || 4001;
const index = require("./routes/index");


let interval;

const app = express();


app.use(index);
app.use(cors());

const server = http.createServer(app);

const io = socketIo(server);

// Getting Data From the End Point;
const getApiAndEmit = async socket => {
    try {
        const res = await axios.get(
            "http://localhost:4001/"
        ); // Getting the data from DarkSky
        socket.emit("FromAPI", res.data.currently.temperature); // Emitting a new message. It will be consumed by the client
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};


io.on("connection", socket => { // When client connect
    console.log("New client connected");

    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(
        () => getApiAndEmit(socket),
        1000
    );

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

// Starting the Server
server.listen(port, () => console.log(`Listening on port ${port}`));

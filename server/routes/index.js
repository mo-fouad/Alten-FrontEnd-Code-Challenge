const express = require("express");
const router = express.Router();

const db = require("../database/db");

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

/**
 * Respond with the updated DB
 */
router.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(updateDBVehicles(db)).status(200);
});

module.exports = router;

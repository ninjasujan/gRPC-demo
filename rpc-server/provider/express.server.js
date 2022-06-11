const express = require("express");
const app = express();
const Locals = require("../configs/Locals");

class Express {
    init = () => {
        app.listen(Locals.EXPRESS_SERVER_PORT, () => {
            console.log("[SERVER RUNNING]");
        });
    };
}

module.exports = new Express();

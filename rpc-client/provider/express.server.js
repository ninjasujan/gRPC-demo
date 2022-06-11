const express = require("express");
const Locals = require("../configs/Locals");
const appRoute = require("../Api/app.route");

class Express {
    init = () => {
        this.app = express();
        this.app.listen(Locals.EXPRESS_SERVER_PORT, () => {
            console.log("[SERVER RUNNING]");
        });
        this.mountRoute();
    };

    mountRoute = () => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/api", appRoute.router);
        this.app.use(this.notFound);
        this.app.use(this.errorHandler);
    };

    notFound = (req, res, next) => {
        res.status(404).json({ message: "Route not found.!" });
    };

    errorHandler = (err, req, res, next) => {
        const message = err.message;
        res.status(400).json({ message });
    };
}

module.exports = new Express();

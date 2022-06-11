const util = require("util");
const express = require("express");
const gRPC = require("../provider/grpc.client");

class Api {
    constructor() {
        this.router = express.Router();
        this.router.get("/publish", this.getPublish);
    }

    getPublish = (req, res, next) => {
        try {
            const point = { latitude: 409146138, longitude: -746188906 };
            gRPC.gRPC_Client.getFeature(point, (err, data) => {
                console.log("[data]", data, err);
            });
            res.status(200).json({ message: "Api hit" });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new Api();

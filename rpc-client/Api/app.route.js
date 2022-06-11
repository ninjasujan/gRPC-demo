const express = require("express");
const routeGuideService = require("../service/route_guide.service");

class Api {
    constructor() {
        this.router = express.Router();
        this.router.get("/publish", this.getPublish);
    }

    getPublish = async (req, res, next) => {
        try {
            const point = { latitude: 409146138, longitude: -746188906 };
            const { success } = await routeGuideService.getFeature(point);
            res.status(200).json({ status: success, message: "Api hit" });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new Api();

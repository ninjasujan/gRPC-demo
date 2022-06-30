const gRPC = require("../provider/grpc.client");

class RouteGuide {
    getFeature = (point) => {
        return new Promise((resolve, reject) => {
            gRPC.gRPC_Client.getFeature(point, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            });
        });
    };
}

module.exports = new RouteGuide();

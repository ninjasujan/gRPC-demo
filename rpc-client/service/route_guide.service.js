const gRPC = require("../provider/grpc.client");

class RouteGuide {
    getFeature = (point) => {
        return new Promise((resolve, reject) => {
            gRPC.gRPC_Client.getFeature(point, (err, data) => {
                if (err) {
                    reject("[Error RPC call]", err?.message);
                }
                resolve(data);
            });
        });
    };
}

module.exports = new RouteGuide();

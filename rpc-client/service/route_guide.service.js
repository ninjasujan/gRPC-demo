const gRPC = require("../provider/grpc.client");

class RouteGuide {
    getFeature = (point) => {
        return new Promise((resolve, reject) => {
            gRPC.gRPC_Client.getFeature(point, (err, response) => {
                if (err) {
                    reject("[Error RPC call]", err?.message);
                }
                console.log("[GRPC response]", JSON.parse(response.details));
                resolve(response);
            });
        });
    };
}

module.exports = new RouteGuide();

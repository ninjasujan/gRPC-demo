const grpc = require("@grpc/grpc-js");
const Locals = require("../configs/Locals");
const routeGuide = require("../proto/loader/route_guide.loader");
const { getFeature } = require("../service/route_guide.service");

class GRPC {
    init = () => {
        this.server = new grpc.Server();
        this.server.addService(routeGuide.protoDescriptor.RouteGuide.service, {
            getFeature: getFeature,
        });
        grpc.credentials.createSsl();
        this.server.bindAsync(
            `104.161.92.74:9006`,
            grpc.ServerCredentials.createInsecure(),
            () => {
                this.server.start();
            }
        );
    };
}

module.exports = new GRPC();

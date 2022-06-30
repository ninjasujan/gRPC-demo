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
            `127.0.0.1:${Locals.EXPRESS_SERVER_PORT}`,
            grpc.ServerCredentials.createInsecure(),
            () => {
                this.server.start();
            }
        );
    };
}

module.exports = new GRPC();

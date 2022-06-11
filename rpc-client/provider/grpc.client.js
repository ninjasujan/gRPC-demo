const grpc = require("@grpc/grpc-js");
const Locals = require("../configs/Locals");
const routeGuide = require("../proto/loader/route_guide.loader");

class GRPC {
    init = () => {
        this.gRPC_Client = new routeGuide.protoDescriptor.RouteGuide(
            `127.0.0.1:${Locals.RPC_SERVER_PORT}`,
            grpc.credentials.createInsecure()
        );
    };
}

module.exports = new GRPC();

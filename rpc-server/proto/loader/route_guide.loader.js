const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

class RouteGide {
    constructor() {
        const PROTO_PATH = path.join(
            __dirname,
            "..",
            "service",
            "route_guide.proto"
        );
        const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });
        this.protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    }
}

module.exports = new RouteGide();

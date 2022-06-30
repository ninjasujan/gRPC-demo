const fs = require("fs");
const path = require("path");
const grpc = require("@grpc/grpc-js");
const Locals = require("../configs/Locals");
const routeGuide = require("../proto/loader/route_guide.loader");

class GRPC {
    init = () => {
        try {
            this.credentials = grpc.credentials.createSsl(
                fs.readFileSync(
                    path.join(
                        __dirname,
                        "..",
                        "..",
                        "scripts",
                        "certs",
                        "ca.crt"
                    )
                ),
                fs.readFileSync(
                    path.join(
                        __dirname,
                        "..",
                        "..",
                        "scripts",
                        "certs",
                        "client.key"
                    )
                ),
                fs.readFileSync(
                    path.join(
                        __dirname,
                        "..",
                        "..",
                        "scripts",
                        "certs",
                        "client.crt"
                    )
                )
            );

            this.gRPC_Client = new routeGuide.protoDescriptor.RouteGuide(
                `localhost:5000`,
                this.credentials
            );
            console.log("[Connected]");
        } catch (error) {
            console.log("[Error in RPC connection]", error);
        }
    };
}

module.exports = new GRPC();

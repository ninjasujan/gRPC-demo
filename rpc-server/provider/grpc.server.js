const fs = require("fs");
const path = require("path");
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

        this.credentials = grpc.ServerCredentials.createSsl(
            fs.readFileSync(
                path.join(__dirname, "..", "..", "scripts", "certs", "ca.crt")
            ),
            [
                {
                    cert_chain: fs.readFileSync(
                        path.join(
                            __dirname,
                            "..",
                            "..",
                            "scripts",
                            "certs",
                            "server.crt"
                        )
                    ),
                    private_key: fs.readFileSync(
                        path.join(
                            __dirname,
                            "..",
                            "..",
                            "scripts",
                            "certs",
                            "server.key"
                        )
                    ),
                },
            ]
        );

        this.server.bindAsync(`localhost:5000`, this.credentials, () => {
            this.server.start();
        });
    };
}

module.exports = new GRPC();

const express = require("./provider/express.server");
const rgpc = require("./provider/grpc.client");

class App {
    static init = () => {
        express.init();
        rgpc.init();
    };
}

App.init();

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

module.exports = {
    EXPRESS_SERVER_PORT: process.env.EXPRESS_SERVER_PORT,
    RPC_SERVER_PORT: process.env.RPC_SERVER_PORT,
};

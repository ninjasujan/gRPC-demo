const getFeature = async (point, callback) => {
    console.log("[RPC Server - parsed data]", point.request);
    callback(null, {
        success: true,
        details: JSON.stringify({
            status: "success",
            message: "Api data passed",
            data: [{ key1: "value1" }, { key2: "value2" }],
        }),
    });
};

module.exports = {
    getFeature,
};

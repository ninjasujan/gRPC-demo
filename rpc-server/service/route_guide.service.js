const getFeature = async (point, callback) => {
    callback(null, {
        success: true,
        response: JSON.stringify({
            status: "success",
            message: "Some Info",
            details: [{ key: "some key" }, { key: "some_value" }],
        }),
    });
};

module.exports = {
    getFeature,
};

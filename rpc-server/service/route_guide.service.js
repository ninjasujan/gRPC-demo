const getFeature = async (point, callback) => {
    callback(null, {
        success: true,
        response: JSON.stringify({
            status: "success",
            message: "Some Info",
        }),
    });
};

module.exports = {
    getFeature,
};

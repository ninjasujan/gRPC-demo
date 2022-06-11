const getFeature = async (point, callback) => {
    console.log("[Call back fired]", point.request);
    callback(null, { success: true });
};

module.exports = {
    getFeature,
};

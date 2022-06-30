const getFeature = async (point, callback) => {
    callback(null, {
        success: true,
        response: JSON.stringify({
            message: "Hello World!",
            languages: ["c++", "golang", "java", "javascript"],
        }),
    });
};

module.exports = {
    getFeature,
};

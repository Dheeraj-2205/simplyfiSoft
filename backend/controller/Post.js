const Post = require("../models/Post");
exports.createProduct = async (req,res) => {
    try {
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}
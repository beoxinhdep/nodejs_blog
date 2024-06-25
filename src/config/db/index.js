const mongoose = require("mongoose");

async function connect(params) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blog_dev");

        console.log("Connect db successful!!");
    } catch (error) {
        console.log("Connect db error: " + error);
    }
}
module.exports = { connect };

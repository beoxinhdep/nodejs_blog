const mongoose = require("mongoose");

async function connect(params) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blog_dev");

        console.log("Connect successful");
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connect };

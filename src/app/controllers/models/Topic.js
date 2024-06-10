const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Topic = new Schema({
    id: ObjectId,
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Topic", Topic);

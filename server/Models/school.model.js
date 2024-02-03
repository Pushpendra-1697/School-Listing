const { Schema, model } = require("mongoose");

// **************** School Schema / blueprint with school collection ****************
const schoolSchema = new Schema(
    {
        name: String,
        image: String,
        address: String,
        city: String,
        state: String,
        phone: { type: Number, required: true },
        email: { type: String, required: true }
    },
    { versionKey: false, timestamps: true }
);

// Model of school collection
const SchoolModel = model("school", schoolSchema);

module.exports = SchoolModel;
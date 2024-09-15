const { Schema, model } = require("mongoose");


const ServiceSchema = new Schema({
    service: { type: String, require: true},
    description: {type: String, require: true},
    provider: {type: String, require: true},
    price:{type: String, require: true}
});

const Servise = new model("Service", ServiceSchema);

module.exports = Servise;
const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({

    State:{
        type:String,
        required:[true, "State must be provided"]
    },
    Capital: {
        type:String,
        required:[true, "Capital must be provided"]
    },
    ChiefMinister: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("India",modelSchema);
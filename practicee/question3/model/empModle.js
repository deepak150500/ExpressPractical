const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    salary:Number
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;
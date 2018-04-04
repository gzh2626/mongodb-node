var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bugSchema = new Schema({
    title: String,
    status: String,
    time: String
});
var model = mongoose.model('model', bugSchema);



module.exports=model;
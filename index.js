var MongoUrl = "mongodb://localhost:27017/test";
var mongoose = require("mongoose");
mongoose.connect(MongoUrl);
var model = require('./model');

var getData=require('./get-data');
var showData=require('./show-data');


if (process.argv[2] == 'getdata') {
    getData(model);
} else if(process.argv[2] == 'showdata') {
    showData(model);
}
const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var vendorShema = new Schema({
    companyName:String,
    companyReg:String,
    companyEmail:String,
    tel:String,
    mobile:String,
    address:String,
    state:String,
    city:String,
    zipCode:String,
    Country:String,
    typOfBussiness:String,
    companyProfile:String,
    authorizationLetter:String,
    copanyRegistration:String,
    GSTRegistration:String,
    sharholder:String
});

var VENDOR = mongoose.model('vendor', vendorShema);
module.exports = VENDOR;
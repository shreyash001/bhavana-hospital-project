const mongoose = require('mongoose');

const DetailedInformationSchema = mongoose.Schema({
    name: { type: String, required: true},
    age:{type:String, required: true},
    height:{type:String, required: true},
    weight:{type:String, required: true},
    gender:{type:String, required: true},
    address:{type:String, required: true},    
    phone:{type:String, required: true},
}); 

module.export = mongoose.model('UserInformation',DetailedInformationSchema);
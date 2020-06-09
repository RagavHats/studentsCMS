const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3
    },
    latitude : {
        type : String,
        required : true,
    },
    longitude : {
        type : String,
        required : true,
    },
    class_name : {
        type : String ,
        required : true
    },
    photo: {
      data: Buffer,
      contentType: String
    }
},{
        timestamps : true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
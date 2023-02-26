const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Student = new Schema ({
    Name:{
        type:String,
        unique:true,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Note:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('students',Student);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Chat = new Schema ({
    userName:{
        type:String,
        unique:true,
       // required:true
    },
    message:{
        type:String,
        unique:true,
      //  required:true
    },
    date:{
        type:Date,
       // required:true
    }
});

module.exports = mongoose.model('chats',Chat);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var Contact= new
Schema(
{
FullName : String,
Phone : Number
}
); 

module.exports = mongoose.model('contacts',Contact);
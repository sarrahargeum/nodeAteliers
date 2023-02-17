const express = require('express');
const router = express.Router();

var Contact = require('../models/contact.js');

router.get('/', function (req, res, next) {
   Contact.find(function (err, contacts) {
      if (err){
         console.log("error message "+err);
      }else{
         res.json({title :"les listes contactes" , cont:contacts});
      }
   });

  });

  router.post('/', function(req, res, next) {
   new Contact({
      FullName : req.body.FullName,
      Phone : req.body.Phone
      })
      .save(
      (err,newcontact)=>{
      if (err)
      console.log("error message "+err); else{
      console.log(newcontact);
      res.json("  Contact " + newcontact._id +" added");
      }
      }
     );
   });
  
   
  
  module.exports = router;
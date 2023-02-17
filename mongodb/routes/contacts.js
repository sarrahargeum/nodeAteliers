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
  
   router.get('/delete/:id', function (req, res, next) {
  Contact.findByIdAndDelete(req.params.id,
    (err, data) => {
      console.log(data);
      /* return res.status(200).send("deleted").end(); */
      res.redirect('/contacts');
    }
  );
});
   
   router.get('/find/:id', function (req, res, next) {
      Contact.findById(req.params.id,
        (err, contacts) => { res.json(contacts); }
      );
    });
    
  module.exports = router;
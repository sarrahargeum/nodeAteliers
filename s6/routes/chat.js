const express = require("express");

const router=express.Router();

const { getChat, saveChat, updateChat,deleteChat} = require("../service/chat.js");

router.get("/",(req,res,next)  => {
res.render('chat')

});


router.get('/',getChat);
router.post('/',saveChat);
router.delete('/',deleteChat);
router.put('/update',updateChat);

module.exports =router;

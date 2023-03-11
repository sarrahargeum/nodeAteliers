const Chat = require("../models/chat.js");
const getChat = (req, res, next) => {
    Chat.find((err, chats) => {
    if (err) {
      console.log("error:", err);
    } else {
      res.json({ titleMe: "les listes des chats", chats });
    }
  });
};
const saveChat = (req, res, next) => {
    new Chat({
      userName: req.body.userName,
      message: req.body.message,
      date: req.body.date,
    }).save((err, newChat) => {
      if (err) console.log("un message d'erreur " + err);
      else {
        console.log(newChat);
        res.json("Chat: " + newChat + "added successfully !!");
      }
    });
  };

  const updateChat = (req, res, next) => {
    Chat.findOne({
      userName: req.body.userName,
    }).then((result) => {
      (result.message = req.body.message), 
      (result.userName = req.body.userName) ,
      (result.date = req.body.date)
      result
        .save()
        .then((s) => res.status(201).send(s.userName + "  updated successully"))
        .catch((err) => res.status(404).send("error!?"));
    });
  };

  const deleteChat = (req, res, next) => {
    const id = req.params.id;
    Student.findByIdAndDelete(id, (err, students) => {
      console.log(chats);
  
      res.redirect("/chat");
    });
  }
  module.exports = {getChat,saveChat,deleteChat,updateChat};
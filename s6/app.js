const express = require('express');
const http = require('http');
var path = require('path');
var app = express();
const chatRouter= require ("./routes/chat.js");
app.set("views",path.join(__dirname,"views"));

app.set("view engine","twig");
const server = http.createServer(app);

const io=require("socket.io")(server);

io.on("connection",(socket) => {
    console.log("user connected");
   
    socket.emit("msg"," a new user is connected");

});

app.use("/chat",chatRouter);
server.listen(3000,() =>console.log("server is run"));

io.on("connection", function (socket) {
  console.log("User Connected..");
});

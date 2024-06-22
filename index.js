const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

var server = app.listen(3000, () => {
  console.log("Listening on port 3000");
});
var upgradedServer = socket(server);

upgradedServer.on("connection", function (socket) {
  socket.on("sendingMessage", (data) => {
    upgradedServer.emit("broadcastMessage", data);
  });

  console.log("Websocket connected", socket.id);
});

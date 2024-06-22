var socket = io.connect("http://localhost:3000");

var button = document.getElementById("send");
var message = document.getElementById("message");
var output = document.getElementById("output");
var username = document.getElementById("username");

button.addEventListener("click", () => {
  socket.emit("sendingMessage", {
    message: message.value,
    username: username.value,
  });
});

socket.on("broadcastMessage", (data) => {
  output.innerHTML +=
    "<p><strong>" + data.username + ":</strong>" + data.message + "</p>";
});

const net = require("net");

const addZero = num => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

const server = net.createServer(socket => {
  //  "2013-07-06 17:42"
  let date = new Date();
  let timeServer =
    "" +
    date.getFullYear() +
    "-" +
    addZero(date.getMonth() + 1) +
    "-" +
    addZero(date.getDate()) +
    " " +
    addZero(date.getHours()) +
    ":" +
    addZero(date.getMinutes()) +
    "\n";

  socket.end(timeServer);
});

server.listen(process.argv[2]);

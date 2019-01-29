const http = require("http");
const fs = require("fs");

// Path to the file as response
let path = process.argv[3];

const server = http.createServer((req, res) => {
  // Handle the logic
  let readStream = fs.createReadStream(path);
  readStream.on("open", () => {
    readStream.pipe(res);
  });
});

server.listen(process.argv[2], () => {
  console.log("Listening on port:", process.argv[2]);
});

/* Write a program that uses a single asynchronous filesystem operation to read a file 
and print the number of newlines it contains to the console (stdout), 
similar to running cat file | wc -l. The full path to the file to read will be provided as the first
command-line argument.
*/

var fs = require("fs");

fs.readFile(process.argv[2], function(err, lines) {
  //if error is caught, message will be printed in the console
  if (err) {
    return console.log("Enter a valid path to the file");
  }
  // else proceed with the calculation of lines
  else {
    var linesArray = fs.readFileSync(process.argv[2], "utf-8").split("\n");
    console.log(linesArray.length - 1);
  }
});

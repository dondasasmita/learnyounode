/*
Create a program that prints a list of files in a given directory, 
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to
filter the list to only files that end with .txt. Note that the second
argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You
must use asynchronous I/O.
*/

var fs = require("fs");

fs.readdir(process.argv[2], function(err, directory) {
  if (err) {
    console.log("No file found");
  } else {
    for (let i = 0; i < directory.length; i++) {
      if (directory[i].includes("." + process.argv[3])) {
        console.log(directory[i]);
      }
    }
  }
});

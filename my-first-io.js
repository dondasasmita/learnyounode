
/* Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the console (stdout), 
similar to running cat file | wc -l.
*/

// import fs
var fs = require('fs');

//variable to store the file from the command line args
// var contents = fs.readFileSync(process.argv[2]);

// // variable to store the number of lines
// var lines = contents.toString().split('\n').length -1;

// //print the number of lines in the doc
// console.log(lines);

// second solutions all in one line of code
var lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1;
console.log(lines)


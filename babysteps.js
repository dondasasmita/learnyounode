// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

var totalSum = 0;

for (var i = 2 ; i < process.argv.length ; i++){
    totalSum = totalSum + Number(process.argv[i]);
}

console.log(totalSum);

// console.log(process.argv);
// console.log(process.argv[3]);
// console.log(process.argv.length);


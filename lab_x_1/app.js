console.log('hello AQ');

var fs = require('fs');

const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter filename: ", function (filename) {
    if(fs.existsSync(filename)){
        throw Error("sorry that file exists. try again!");
    }
    fs.writeFile(filename, 'You are awesome!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    rl.close();
});







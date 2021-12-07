console.log('hello AQ');

var fs = require('fs');

const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var waitforinput = function(){
    rl.question('Enter filename: ', function(filename){
        if (!fs.existsSync(filename)){
            rl.close();
            fs.writeFile(filename, 'You are awesome!', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
        else{
            console.log('Oops that filename is taken, try again!');
            waitforinput();
        }
    });
}
waitforinput();






// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const spawn = require('child_process').spawn;
const scriptExecution = spawn("python.exe", ["simple_adder.py"]);

// Handle normal output
scriptExecution.stdout.on('data', (data) => {
    console.log(String.fromCharCode.apply(null, data));
    document.querySelector('.content .value').innerHTML = String.fromCharCode.apply(null, data);
});

// Write data (remember to send only strings or numbers, otherwhise python wont understand)
var data = JSON.stringify([1,2,3,4,5,6]);
scriptExecution.stdin.write(data);
// End data write
scriptExecution.stdin.end();

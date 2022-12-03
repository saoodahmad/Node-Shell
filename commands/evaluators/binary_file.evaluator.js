const { execFile } = require('child_process');

module.exports = (command, args, shell) => {

    let child = execFile(command, args);
    
    child.stdout.on("data", (data) => {
        console.log(`${data}`);
    })

    child.stderr.on("data", (data) => {
        console.log(`error in binary execution: ${data}`);
    })

    child.on("close", (code, signal) => {
        console.log("exit code", code)
        console.log("exit signal", signal)
        shell.prompt();
    })

    return child;
}
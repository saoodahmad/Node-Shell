const os = require('os');
const process = require('process');
const readline = require('readline');

const evaluateCommands = require('./evaluation/evaluate_commands');

let currentForegroundProcess = null;

var shell = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});


const initShell = () => {

    shell.on('SIGINT', () => {

        if (currentForegroundProcess != null) {
            process.kill(currentForegroundProcess.pid, 'SIGINT');
            currentForegroundProcess = null;
        }

        shell.resume()
    });

    shell.on('SIGTSTP', () => {
        shell.resume();
    })

    shell.on('SIGCONT', () => {
        shell.resume()
    });
 
    shell.on('line', function (line) {

        const [command, ...args] = line.trim().split(" ")

        currentForegroundProcess = evaluateCommands(command, args, shell);
    });


    process.chdir(os.homedir())

    shell.prompt('>');
}

initShell();

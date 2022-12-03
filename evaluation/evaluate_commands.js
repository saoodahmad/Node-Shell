const COMMANDS = require("../commands/commands");

const { evaluateListCommand, evaluatePwdCommand, evaluateCdCommand, binaryFileEvaluationCommand } = require('../commands/evaluators/index');

const {validatePathCommand} = require("../utils/utils.js");


module.exports = (command, args, shell) => {

    switch (command) {

        case COMMANDS.LIST:
            evaluateListCommand(args, shell)
            break;
        case COMMANDS.PWD:
            evaluatePwdCommand(shell);
            break;
        case COMMANDS.CD:
            evaluateCdCommand(args, shell);
            break;
        case COMMANDS.EXIT:
            console.log('exited')
            process.exit(0);
        default:
            if (validatePathCommand(command)) {
                currentForegroundProcess = binaryFileEvaluationCommand(command, args, shell);

                return currentForegroundProcess ;
            }
            console.error(`${command} : command/path not found (see readme for detail) `)
            shell.prompt();
        
        return null;

    }


}


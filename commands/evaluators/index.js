const evaluateListCommand = require('./list_command.evaluator');
const evaluatePwdCommand = require('./print_working_directory_command.evaluator');
const evaluateCdCommand = require('./change_directory_command.evaluator');
const binaryFileEvaluationCommand = require('./binary_file.evaluator');

module.exports = {
    evaluateListCommand,
    evaluatePwdCommand,
    evaluateCdCommand,
    binaryFileEvaluationCommand
}
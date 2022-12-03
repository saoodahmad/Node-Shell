const os = require('os');

module.exports = (args, shell) => {

    try {
        
        if (args.length == 0) {
            args.push(os.homedir())
        }
    
        process.chdir(args[0]);
    
        console.log(`switched to ${process.cwd()}`)
        shell.prompt();

    } catch (error) {
        
        console.error(error.message);
        shell.prompt();
    }

    
}
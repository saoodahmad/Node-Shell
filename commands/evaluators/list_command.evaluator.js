const fs = require('fs');

module.exports = (args, shell) => {

    try {
        
        if (args.length == 0) {
            args.push('.')
        }
    
        fs.readdir(args[0], (err, files) => {
    
            if(!err) {
                files.forEach(file => {
                    console.log(file);
                });
            }else {
                console.error(err)
            }
            
            shell.prompt();
    
        });

    } catch (error) {
        console.error(`Error: ${error.message}`);
        shell.prompt();
    }
    


}
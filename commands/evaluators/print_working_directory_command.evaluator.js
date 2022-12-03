module.exports = (shell) => {

    try {

        console.log(process.cwd());

        shell.prompt();
    } catch (error) {

        console.error(`Error: ${error.message}`);
        shell.prompt();
    }

}
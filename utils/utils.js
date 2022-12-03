const fs = require('fs');

const path = require('path');

const validatePathCommand =  (str) => {

    try {
        return fs.statSync(str).isFile() && ['.exe', '.out'].includes(path.extname(str));
    } catch (error) {
        return false;
    }

}

module.exports = {
    validatePathCommand
}

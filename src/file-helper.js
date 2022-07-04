const fs = require("fs");
class FileHelper {
    readJsonFile = (filename, defaultValue) => {
        if (!fs.existsSync(filename)) return defaultValue;
        
        return JSON.parse(fs.readFileSync(filename));
    }
};

module.exports = new FileHelper();
const fs = require("fs");

class PatternPluginsManager {
    patternPlugins = [];

    initPatternPlugins() {
        console.log("Scanning directory pattern-plugins for valid plugin files...");
        const pluginFiles = fs.readdirSync("./pattern-plugins");
        pluginFiles.forEach((pluginFile) => {
            const pluginModule = require("../pattern-plugins/" + pluginFile);
            if (pluginModule.pluginInfo !== undefined && pluginModule.plugin !== undefined) {
                const pluginEntry = {
                    pluginInfo: pluginModule.pluginInfo,
                    pluginClass: new pluginModule.plugin()
                };


                this.patternPlugins.push(pluginEntry);
                console.log("Found plugin \"" + pluginEntry.pluginInfo.name + "\" by " + pluginEntry.pluginInfo.author);
                console.log("Loading plugin.");
                pluginEntry.pluginClass.loadPlugin();
            } else {
                console.error("Error loading plugin from " + pluginFile + ". No valid plugin exports found.");
            }
        });
    }

    createPatternWithRandomPlugin(book, jsPDFDocument) {
        const randomPlugin = this.patternPlugins[Math.floor(Math.random() * this.patternPlugins.length)];
        randomPlugin.pluginClass.createPattern(book, jsPDFDocument);
    }


};

module.exports = PatternPluginsManager;
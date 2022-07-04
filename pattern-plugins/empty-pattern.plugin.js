class EmptyPattern {

    loadPlugin() {
    }

    unloadPlugin() {
    }

    createPattern(book, jsPDFDocument) {
    }
}

module.exports.pluginInfo = {
    name: "Empty Pattern Plugin",
    description: "This plugin does nothing. To prevent random books from having a pattern.",
    author: "timafh"
};
module.exports.plugin = EmptyPattern;

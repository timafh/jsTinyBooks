const jsPDFHelper = require("../src/jspdf-helper");

class CirclePattern {

    loadPlugin() {
        console.log("CirclePattern Plugin loaded");
    }

    unloadPlugin() {
        console.log("CirclePattern Plugin unloaded");
    }

    createPattern(book, jsPDFDocument) {
        const radius = (book.scaled_width * Math.randomBetween(0.3, 0.9)) / 2;
        let yPos = book.currentY + (book.scaled_height - radius - (radius / 2));

        jsPDFHelper.setFillColor(book.shadedColor, jsPDFDocument);
        jsPDFDocument.circle(book.spineX + (book.scaled_width / 2), yPos, radius, "F");
    }
}

module.exports.pluginInfo = {
    name: "Circle Pattern Plugin",
    author: "timafh"
};
module.exports.plugin = CirclePattern;

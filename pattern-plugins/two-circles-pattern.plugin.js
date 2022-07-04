const jsPDFHelper = require("../src/jspdf-helper");

class TwoCirclesPattern {

    loadPlugin() {
 
    }

    unloadPlugin() {

    }

    createPattern(book, jsPDFDocument) {
        const radius = (book.scaled_width * Math.randomBetween(0.3, 0.7)) / 2;
        const radius2 = radius * Math.randomBetween(0.5, 0.7);

        let yPos = book.currentY + (book.scaled_height - radius - (radius / 2));


        jsPDFHelper.setFillColor(book.shadedColor, jsPDFDocument);
        jsPDFDocument.circle(book.spineX + (book.scaled_width / 2), yPos, radius, "F");

        const shadedColor2 = book.color.getLighterShade(0.3);
        jsPDFHelper.setFillColor(shadedColor2, jsPDFDocument);
        jsPDFDocument.circle(book.spineX + (book.scaled_width / 2), yPos, radius2, "F");
    }
}

module.exports.pluginInfo = {
    name: "Two Circle Pattern Plugin",
    author: "timafh"
};
module.exports.plugin = TwoCirclesPattern;

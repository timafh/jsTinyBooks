const jsPDFHelper = require("../src/jspdf-helper");

class ThreeVerticalLinesPlugin {

    loadPlugin() {
  
    }

    unloadPlugin() {

    }

    createPattern(book, jsPDFDocument) {
        const rand = Math.random();

        const lineLengthMax = ((book.scaled_height / 20) * 19);
        const lineLengthMin = ((book.scaled_height / 20) * 6);



        const lineLengthFixedRandom = Math.randomBetween(lineLengthMin, lineLengthMax);

        const lineLengthFunc = () => {
            if (rand > 0.5) {
                return Math.randomBetween(lineLengthMin, lineLengthMax);
            } else {
                return lineLengthFixedRandom;
            }
        }



        jsPDFHelper.setDrawColor(book.shadedColor, jsPDFDocument);

        let lineLength = lineLengthFunc();
        jsPDFDocument.line(book.spineX + (book.scaled_width / 6) * 2, book.currentY + (book.scaled_height - lineLength) / 2, book.spineX + (book.scaled_width / 6) * 2, book.currentY + book.scaled_height - (book.scaled_height - lineLength) / 2);
        lineLength = lineLengthFunc();
        jsPDFDocument.line(book.spineX + (book.scaled_width / 6) * 3, book.currentY + (book.scaled_height - lineLength) / 2, book.spineX + (book.scaled_width / 6) * 3, book.currentY + book.scaled_height - (book.scaled_height - lineLength) / 2);
        lineLength = lineLengthFunc();
        jsPDFDocument.line(book.spineX + (book.scaled_width / 6) * 4, book.currentY + (book.scaled_height - lineLength) / 2, book.spineX + (book.scaled_width / 6) * 4, book.currentY + book.scaled_height - (book.scaled_height - lineLength) / 2);

    }
}

module.exports.pluginInfo = {
    name: "Three Vertical Lines Pattern Plugin",
    author: "timafh"
};
module.exports.plugin = ThreeVerticalLinesPlugin;

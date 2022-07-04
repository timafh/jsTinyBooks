const jsPDFHelper = require("../src/jspdf-helper");

class HorizontalLinesAndCirclePattern {

    loadPlugin() {

    }

    unloadPlugin() {

    }

    createPattern(book, jsPDFDocument) {
        const radius = (book.scaled_width * Math.randomBetween(0.3, 0.7)) / 2;
        const lineLength = (book.scaled_width * Math.randomBetween(0.4, 0.7));

        jsPDFHelper.setFillColor(book.shadedColor, jsPDFDocument);
        jsPDFHelper.setDrawColor(book.shadedColor, jsPDFDocument);

        jsPDFDocument.circle(book.spineX + (book.scaled_width / 2), book.currentY + (book.scaled_height - radius - (radius / 2)), radius, "F");
        jsPDFDocument.line(book.spineX + ((book.scaled_width - lineLength) * 0.5), book.currentY + (book.scaled_height / 10), book.spineX + ((book.scaled_width - lineLength) * 0.5) + lineLength, book.currentY + (book.scaled_height / 10));
        jsPDFDocument.line(book.spineX + ((book.scaled_width - lineLength) * 0.5), book.currentY + ((book.scaled_height / 10) * 2), book.spineX + ((book.scaled_width - lineLength) * 0.5) + lineLength, book.currentY + ((book.scaled_height / 10) * 2));
        jsPDFDocument.line(book.spineX + ((book.scaled_width - lineLength) * 0.5), book.currentY + ((book.scaled_height / 10) * 3), book.spineX + ((book.scaled_width - lineLength) * 0.5) + lineLength, book.currentY + ((book.scaled_height / 10) * 3));
    
    }
}

module.exports.pluginInfo = {
    name: "Horizontal Lines and Circle Pattern Plugin",
    description: "Generates three horizontal lines at the top of the book spline and one circle at the bottom",
    author: "timafh"
};
module.exports.plugin = HorizontalLinesAndCirclePattern;

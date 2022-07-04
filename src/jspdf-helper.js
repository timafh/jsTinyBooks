const { ColorHelper, Color } = require("./color-helper");

class jsPDFHelper {


    static setFillColor(color, doc) {
       doc.setFillColor(color.red, color.green, color.blue);
    }

    static setDrawColor(color, doc) {
        doc.setDrawColor(color.red, color.green, color.blue);
     }
};

module.exports = jsPDFHelper;
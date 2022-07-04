const FileHelper = require("./file-helper");
const options = require('./commandline-args');
const chroma = require("chroma-js");

class Color {
    red = 0;
    green =  0;
    blue = 0;

    constructor(red = 0, green = 0, blue = 0) {
    
        if (Array.isArray(red)) {
            this.red = red.r;
            this.green = red.g;
            this.blue = red.b;
        }
        else {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
    }


    getLighterShade = (mixValue = 0.15) => {
        const c = chroma.mix(this.toChromaColor(), "white", mixValue).rgb();
        return Color.fromChromaRGB(c);
    }


    static fromChromaRGB = (chromaRGB) => {
        return new Color(chromaRGB[0], chromaRGB[1], chromaRGB[2]);
    }
    
    toChromaColor = () => {
        return chroma([this.red, this.green, this.blue]);
    }

    tojsPDFColor = () => {
        return [this.red, this.green, this.blue];
    }
};

class ColorHelper {
    colors = [];

    constructor() {
        if (options.norandomcolors) {
            this.colors = FileHelper.readJsonFile("./configs/colors.json", []);
            if (this.colors.length == 0) {
                throw new Error("Either add custom color definitions in configs/colors.json or use random color generation (do not specify --norandomcolors then)");
            }
        }

    }

    getRandomColor = () => {
        if (!options.norandomcolors) {
            const color = chroma.random().rgb();
            let c = Color.fromChromaRGB(color);
            return c;
        }

        if (this.colors.length === 0) {
            throw Error("No colors defined. Either define colors in configs/colors.json or don't define --norandomcolors to randomly generate colors.");
        }
        return new Color(colors[Math.floor(Math.random() * colors.length)]);
    };
};

module.exports.Color = Color;
module.exports.ColorHelper = new ColorHelper();
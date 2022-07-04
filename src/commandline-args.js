const FileHelper = require('./file-helper');
const seedrandom = require('seedrandom');
const commandLineArgs = require('command-line-args');
const optionDefinitions = require('./option-definitions');

const options = commandLineArgs(optionDefinitions);

if (options.scale === undefined) throw new Error("--scale is mandatory");

if (!options.collection) {
    if (options.width === undefined || options.height === undefined || options.depth === undefined) {
        throw new Error("If collections are not used, you have to define --width, --height and --depth");
    }
}

if (!options.seed) {
    const seed = (Math.random().toString(36).substring(2, 5) + "-" + Math.random().toString(36).substring(2, 5) + "-" + Math.random().toString(36).substring(2, 5)).toUpperCase();
    options.seed = seed;
}
seedrandom(options.seed, { global: true });

options.pageMargins = FileHelper.readJsonFile('./configs/page-margins.config.json', {
    top: 8,
    bottom: 8,
    left: 25,
    right: 5
}
);



options.bookConfigs = [];
options.collectionSizes = FileHelper.readJsonFile("./configs/collection_sizes.json", []);
if (options.collection) {
    if (options.collectionSizes.length == 0) throw new Error("Either add book configurations to configs/collection_sizes.json or do not use --collection");

    options.collectionSizes.forEach((collectionSize) => {
        options.bookConfigs.push({
            width: collectionSize.width,
            height: collectionSize.height,
            depth: collectionSize.depth,
            scale: options.scale
        });
    });
} else {
    options.bookConfigs.push({
        width: options.width,
        height: options.height,
        depth: options.depth,
        scale: options.scale
    });
}

module.exports = options;
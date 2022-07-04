const optionDefinitions = [
    { name: 'scale', alias: 's', type: Number },
    { name: 'width', alias: 'w', type: Number },
    { name: 'height', alias: 'h', type: Number },
    { name: 'depth', alias: 'd', type: Number },
    { name: 'norandomcolors', alias: 'c', type: Boolean },
    { name: 'nopatterns', alias: 'p', type: Boolean },
    { name: 'collection', type: Boolean },
    { name: 'seed', type: String },
    { name: 'print', type: Boolean },
    { name: 'format', alias: 'f', type: String, defaultValue: 'a4' },
    { name: 'nofoldingarea', type: Boolean, defaultValue: false }
];

module.exports = optionDefinitions;
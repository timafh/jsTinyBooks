function InitAdditionalMath() {
    Math.scaleUpValue = (value, scale) => {
        return value * scale / 1;
    };

    Math.scaleDownValue = (value, scale) => {
        return value * 1 / scale;
    };

    Math.randomBetween = (one, two) => {
        return (Math.random() * (one - two) + two);
    }
}

module.exports = InitAdditionalMath;
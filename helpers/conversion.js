export const toFeet = (cm = 0) => {
    const height = parseInt(cm);
    let inch = (height * 0.393700787).toFixed(0);
    const feet = Math.floor(inch / 12);
    inch %= 12;
    return feet.toString();
};

export const toInch = (height = 0) => {
    let inch = (height * 0.393700787).toFixed(0);
    const feet = Math.floor(inch / 12);
    inch %= 12;
    return inch.toString();
};

export const toCm = (feet = 0, inch = 0) => {
    var feetInCm = parseFloat(feet, 10) / 0.032808;
    var inchInCm = parseFloat(inch, 10) / 0.39370;
    return Math.floor(feetInCm + inchInCm).toString();
};

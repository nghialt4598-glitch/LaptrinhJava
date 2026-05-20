const Tesseract = require("tesseract.js");

exports.scanText = async (file) => {
    const result = await Tesseract.recognize(
        file.buffer,
        "eng"
    );

    return {
        text: result.data.text
    };
};
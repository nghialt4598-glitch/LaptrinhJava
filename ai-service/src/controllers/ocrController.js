const ocrService = require("../services/ocrService");

exports.scanText = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const result = await ocrService.scanText(req.file);

        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "OCR error" });
    }
};
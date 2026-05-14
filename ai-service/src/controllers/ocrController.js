const ocrService = require("../services/ocrService");
const aiService = require("../services/aiService");

exports.scanText = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const ocrResult = await ocrService.scanText(req.file);
        const textFromImage = ocrResult.text;

        if (!textFromImage || textFromImage.trim().length === 0) {
            return res.status(400).json({ error: "Could not extract text from image" });
        }

        const aiPrompt = `Đây là nội dung tôi quét được từ ảnh: "${textFromImage}". Hãy phân tích và phản hồi lại nội dung này một cách thông minh nhất.`;

        // Gửi kết quả OCR cho AI service để xử lý
        const aiResult = await aiService.askAI(aiPrompt);

        res.json({
            originalText: textFromImage,
            aiResponse: aiResult.result
        });

    } catch (err) {
        console.error("Lỗi tại OCR Controller:",err);
        res.status(500).json({ error: "OCR error" });
    }
};
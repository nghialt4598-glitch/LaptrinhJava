const aiService = require("../services/aiService");

exports.askAI = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Missing prompt" });
        }

        const result = await aiService.askAI(prompt);

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI error" });
    }
};
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.warn('WARNING: GEMINI_API_KEY is not set. Requests to /api/chat will fail.');
}

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    if (!genAI) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server. Set it in your .env.' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();
    
    res.json({ reply });
  } catch (err) {
    console.error('Error in /api/chat', err.message || err);
    res.status(500).json({ error: 'Gemini AI request failed: ' + (err.message || 'Unknown error') });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));

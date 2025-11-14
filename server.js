const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) {
  console.warn('WARNING: OPENAI_API_KEY is not set. Requests to /api/chat will fail.');
}

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    if (!OPENAI_KEY) {
      // Clear, helpful error so the frontend can display useful instructions
      return res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server. Set it in your .env.' });
    }

    const resp = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
      temperature: 0.7,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`,
      }
    });

    const reply = resp?.data?.choices?.[0]?.message?.content || '';
    res.json({ reply });
  } catch (err) {
    console.error('Error in /api/chat', err?.response?.data || err.message || err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));

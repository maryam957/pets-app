import React, { useState } from "react";
import axios from "axios";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // {role: 'user'|'assistant', text}
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const text = prompt.trim();
    if (!text) return;

    // Add user message locally
    setMessages(prev => [...prev, { role: 'user', text }]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await axios.post('/api/chat', { prompt: text });
      const reply = res.data?.reply || 'No response';
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      console.error('AIChat error', err?.response?.data || err.message || err);
      setError('Sorry — could not reach the AI service.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md center mt-6">
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI..."
          className="input"
          aria-label="Ask AI"
        />
        <button type="submit" className="btn-primary" style={{marginTop: '0.5rem'}} disabled={loading}>
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>

      {error && <div className="card" style={{background:'#fee2e2', color:'#991b1b'}}>{error}</div>}

      <div className="card" style={{minHeight: '120px'}}>
        {messages.length === 0 ? (
          <div className="mb-1">No messages yet — ask a question above.</div>
        ) : (
          <div>
            {messages.map((m, i) => (
              <div key={i} style={{marginBottom: '0.75rem'}}>
                <strong style={{display:'block', marginBottom:'0.25rem'}}>{m.role === 'user' ? 'You' : 'AI'}</strong>
                <div>{m.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIChat;

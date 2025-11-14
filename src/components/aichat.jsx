import React, { useState } from "react";
import axios from "axios";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // {role: 'user'|'assistant', text}
  const [error, setError] = useState("");
  const [demoMode, setDemoMode] = useState(false);

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
      if (demoMode) {
        // Simulate an AI reply for demo mode
        await new Promise(r => setTimeout(r, 800));
        const reply = `Demo reply: I received your question — "${text}". (Demo mode)`;
        setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      } else {
        const res = await axios.post('/api/chat', { prompt: text });
        const reply = res.data?.reply || 'No response';
        setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      }
    } catch (err) {
      console.error('AIChat error', err?.response?.data || err.message || err);
      const remoteMsg = err?.response?.data?.error || '';
      if (remoteMsg && remoteMsg.toLowerCase().includes('openai_api_key')) {
        setError('Server is missing OPENAI_API_KEY. You can add a key to use the real AI, or use Demo Mode below.');
      } else {
        setError('Sorry — could not reach the AI service.');
      }
    } finally {
      setLoading(false);
    }
  };

  const enableDemo = () => {
    setDemoMode(true);
    setError('Demo mode enabled — this uses canned responses, not OpenAI.');
  };

  const openSignup = () => {
    window.open('https://platform.openai.com/signup', '_blank', 'noopener');
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

      {/* When server reports missing key, show actions */}
      {error && (
        <div className="card" style={{background:'#fee2e2', color:'#991b1b'}}>
          <div style={{marginBottom: '0.5rem'}}>{error}</div>
          <div style={{display:'flex', gap:'0.5rem'}}>
            <button className="btn" onClick={openSignup}>Get OpenAI Key</button>
            <button className="btn" onClick={enableDemo}>Use Demo Mode</button>
          </div>
        </div>
      )}

      {demoMode && (
        <div className="card" style={{background:'#eef2ff', color:'#1e3a8a', marginTop:'0.6rem'}}>
          Demo mode is active — responses are simulated locally.
        </div>
      )}

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

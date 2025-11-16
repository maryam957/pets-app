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
      if (remoteMsg && (remoteMsg.toLowerCase().includes('gemini_api_key') || remoteMsg.toLowerCase().includes('api_key'))) {
        setError('Server is missing GEMINI_API_KEY. You can add a key to use the real AI, or use Demo Mode below.');
      } else {
        setError('Sorry — could not reach the AI service.');
      }
    } finally {
      setLoading(false);
    }
  };

  const enableDemo = () => {
    setDemoMode(true);
    setError('Demo mode enabled — this uses canned responses, not Gemini AI.');
  };

  const openSignup = () => {
    window.open('https://makersuite.google.com/app/apikey', '_blank', 'noopener');
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <h3>🤖 AI Pet Assistant</h3>
        {demoMode && <span className="demo-badge">Demo Mode</span>}
      </div>

      <div className="chat-messages" style={{maxHeight: '400px', overflowY: 'auto', marginBottom: '1rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '8px'}}>
        {messages.length === 0 ? (
          <div style={{textAlign: 'center', color: '#6b7280', padding: '2rem 1rem'}}>
            <p>👋 Ask me anything about pet care!</p>
          </div>
        ) : (
          <div>
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role}`} style={{
                marginBottom: '0.75rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: m.role === 'user' ? '#e0f2fe' : '#fff',
                border: m.role === 'assistant' ? '1px solid #e5e7eb' : 'none'
              }}>
                <strong style={{display:'block', marginBottom:'0.4rem', color: m.role === 'user' ? '#0369a1' : '#059669'}}>
                  {m.role === 'user' ? '👤 You' : '🤖 AI'}
                </strong>
                <div style={{color: '#374151', lineHeight: '1.5'}}>{m.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <div className="card" style={{background:'#fee2e2', color:'#991b1b', marginBottom: '1rem', padding: '0.75rem', fontSize: '0.9rem'}}>
          <div style={{marginBottom: '0.5rem'}}>{error}</div>
          <div style={{display:'flex', gap:'0.5rem', flexWrap: 'wrap'}}>
            <button className="btn" style={{fontSize: '0.85rem', padding: '0.4rem 0.8rem'}} onClick={openSignup}>Get Gemini Key</button>
            <button className="btn" style={{fontSize: '0.85rem', padding: '0.4rem 0.8rem'}} onClick={enableDemo}>Use Demo Mode</button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about pet care, training, health..."
          className="input"
          style={{width: '100%', padding: '0.75rem', fontSize: '0.95rem'}}
          aria-label="Ask AI"
          disabled={loading}
        />
        <button type="submit" className="btn-primary" style={{width: '100%', padding: '0.75rem'}} disabled={loading}>
          {loading ? '🔄 Thinking...' : '💬 Send'}
        </button>
      </form>
    </div>
  );
}

export default AIChat;

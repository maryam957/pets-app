import React, { useState } from "react";
import axios from "axios";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }, {
        headers: {
          "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
          "Content-Type": "application/json",
        }
      });
      setResponse(res.data.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResponse("Error fetching response.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI..."
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded w-full">Ask AI</button>
      </form>
      <div className="border p-2 rounded min-h-[100px]">{response}</div>
    </div>
  );
}

export default AIChat;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Care from "./pages/Care";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChat from "./components/aichat";
import AdminMessages from "./pages/adminmessages";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <div className="app-body">
        <main className="site-main">
          <Routes>
          <Route path="/admin" element={<AdminMessages />} />
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/care" element={<Care />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <aside className={`ai-sidebar ${sidebarOpen ? 'open' : 'closed'}`} aria-label="AI Chat">
          <AIChat />
        </aside>

        {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} aria-hidden />}
      </div>

      <Footer />
    </div>
  );
}

export default App;

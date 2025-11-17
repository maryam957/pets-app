import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Care from "./pages/care";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AIChat from "./components/aichat";
import AdminMessages from "./pages/adminmessages";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  const location = useLocation();

  // 🔥 Save last visited page (except Home & Admin)
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/admin") {
      localStorage.setItem("lastVisited", location.pathname);
    }
  }, [location]);

  // 🔥 Apply theme + save in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="site-wrapper">
      <Navbar
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

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

        <aside
          className={`ai-sidebar ${sidebarOpen ? "open" : "closed"}`}
          aria-label="AI Chat"
        >
          <AIChat />
        </aside>

        {sidebarOpen && (
          <div
            className="sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;

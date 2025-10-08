import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";
import { useState } from "react";

// 🌙 Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tasks", label: "Tasks" },
    { to: "/completed", label: "Completed" },
    { to: "/incompleted", label: "Incompleted" },
  ];

  return (
    <nav className="bg-emerald-950/90 text-white fixed top-0 left-0 w-full shadow-lg z-50 backdrop-blur-md border-b border-emerald-800">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-300 hover:text-yellow-400 transition"
        >
          🌙 Islamic Task Manager
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-yellow-400 transition ${
                location.pathname === to ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-emerald-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-900/95 backdrop-blur-lg p-4 space-y-3 border-t border-emerald-700">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block hover:text-yellow-400 transition ${
                location.pathname === to ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// 🌙 Footer Component
const Footer = () => (
  <footer className="bg-emerald-950 text-gray-300 py-4 text-center mt-auto border-t border-emerald-800">
    <p>
      © {new Date().getFullYear()} Islamic Task Manager | Built with 💚 by{" "}
      <span className="text-yellow-400 font-medium">Elham Abdu</span>
    </p>
  </footer>
);

// 🌙 Layout Component with Background
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white relative overflow-hidden">
    {/* Decorative background glow */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-15"></div>
    <Navbar />
    <main className="flex-grow mt-16 px-4 md:px-8 lg:px-16 py-6 z-10">
      {children}
    </main>
    <Footer />
  </div>
);

// 🌙 Main App
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/incompleted" element={<Incompleted />} />
        </Routes>
      </Layout>
    </Router>
  );
}

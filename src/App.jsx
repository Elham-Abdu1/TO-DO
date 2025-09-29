import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 bg-gradient-to-br from-green-50 to-white p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/incompleted" element={<Incompleted />} />
          </Routes>
        </main>

        <footer className="bg-green-700 text-white py-4 text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Islamic Task Manager. All Rights Reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;

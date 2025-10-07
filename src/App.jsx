import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800 text-white">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/incompleted" element={<Incompleted />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="completed" element={<Completed />} />
          <Route path="incompleted" element={<Incompleted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-emerald-950 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          🕌 Islamic Task Manager
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-emerald-950 left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            open ? "top-14" : "top-[-400px]"
          }`}
        >
          <li><Link to="/" className="block px-4 py-2 hover:text-emerald-400">Home</Link></li>
          <li><Link to="/tasks" className="block px-4 py-2 hover:text-emerald-400">Task Manager</Link></li>
          <li><Link to="/completed" className="block px-4 py-2 hover:text-emerald-400">Completed Tasks</Link></li>
          <li><Link to="/incomplete" className="block px-4 py-2 hover:text-emerald-400">Incomplete Tasks</Link></li>
        </ul>
      </div>
    </nav>
  );
}


import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 flex justify-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-yellow-400" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-yellow-400" : "hover:text-yellow-300"
          }
        >
          Task Manager
        </NavLink>
        <NavLink
          to="/completed"
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-yellow-400" : "hover:text-yellow-300"
          }
        >
          Completed
        </NavLink>
        <NavLink
          to="/incompleted"
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-yellow-400" : "hover:text-yellow-300"
          }
        >
          Incompleted
        </NavLink>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center p-3">
        © 2025 Islamic Task Manager | Baraka in productivity 🌙
      </footer>
    </div>
  );
}

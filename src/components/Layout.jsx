import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/tasks", label: "Task Manager" },
    { path: "/completed", label: "Completed Tasks" },
    { path: "/incompleted", label: "Incomplete Tasks" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-emerald-950/80 backdrop-blur-md py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold text-emerald-300">
          🌙 Islamic Task Manager
        </h1>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm sm:text-lg transition font-medium ${
                location.pathname === item.path
                  ? "text-emerald-300 border-b-2 border-emerald-400 pb-1"
                  : "text-gray-300 hover:text-emerald-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-grow px-4 sm:px-12 py-8">{children}</main>

      <footer className="text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} Islamic Task Manager — by Elham Abdu
      </footer>
    </div>
  );
}

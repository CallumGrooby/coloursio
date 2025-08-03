import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="p-4 shadow bg-white">
        <div>
          <h1 className="text-gray-700 text-2xl font-bold">
            Colors.<span>io</span>
          </h1>
        </div>

        <ul className="flex gap-4 mt-2">
          <li>
            <Link to="/docs">Color Contrast</Link>
          </li>
          <li>
            <Link to="/playground">Play Ground</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>

      {/* Fills rest of the screen */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

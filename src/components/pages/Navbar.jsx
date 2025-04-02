import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-background px-16 py-2 items-center ">
        <div>
          <h1 className="text-gray-700 text-2xl font-bold">
            Colors.<span>io</span>
          </h1>
        </div>

        <div className="flex flex-row items-center h-16 text-base">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/about" className="nav-button">
            About
          </Link>
          <Link to="/docs" className="nav-button">
            Docs
          </Link>

          <button
            className="
          text-text px-6 py-1 rounded-full
          border-opacity-100 hover:border-opacity-50 border-2 border-[#919AA6]
          hover:opacity-80
          transition-all duration-200 ease-in
            "
          >
            Export
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

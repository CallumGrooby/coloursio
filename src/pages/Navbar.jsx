import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ExportModal from "./ExportModal";

export const Navbar = () => {
  const [isExportOpen, setIsExportOpen] = useState(false);

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
            <Link to="/contrast-checker">Color Contrast</Link>
          </li>
          <li>
            <Link to="/playground">Play Ground</Link>
          </li>
          <button
            onClick={() => {
              setIsExportOpen(true);
            }}
          >
            Export
          </button>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>

      {
        /* Export Modal */
        isExportOpen && <ExportModal onClose={() => setIsExportOpen(false)} />
      }

      {/* Fills rest of the screen */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

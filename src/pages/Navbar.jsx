import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ExportModal from "./ExportModal";
import { CloseIcon, HamburgerMenu } from "../assets/Icons";

export const Navbar = () => {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="p-4 shadow bg-white">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-gray-700 text-2xl font-bold">
              Colors.<span>io</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 items-center">
            <NavigationButton
              to={"/contrast-checker"}
              title={"Color Contrast"}
            />
            <NavigationButton to={"/playground"} title={"Play Ground"} />
            <NavigationButton to={"/docs"} title={"Docs"} />
            <li>
              <button
                onClick={() => {
                  setIsExportOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-gray-200 transition-colors px-4 bg-blue-600 hover:bg-blue-500 rounded-full cursor-pointer py-1"
              >
                Export
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className={"text-3xl text-neutral-500"} />
            ) : (
              <HamburgerMenu className="text-gray-700 text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4">
              <NavigationButton
                to={"/contrast-checker"}
                title={"Color Contrast"}
              />
              <NavigationButton to={"/playground"} title={"Play Ground"} />
              <NavigationButton to={"/docs"} title={"Docs"} />
              <li>
                <button
                  onClick={() => {
                    setIsExportOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Export
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {
        /* Export Modal */
        isExportOpen && <ExportModal onClose={() => setIsExportOpen(false)} />
      }

      {/* Fills rest of the screen */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
};

const NavigationButton = ({ to, title }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-600 hover:text-gray-900 transition-colors py-1"
      >
        {title}
      </Link>
    </li>
  );
};

import { Link, Outlet } from "react-router-dom";

export const DocsPage = () => {
  return (
    <div className="flex lg:flex-row flex-col h-full container mx-auto">
      {/* Sidebar */}
      <nav className="lg:w-64 w-full lg:border-none lg:border-r  border-b border-gray-300 p-4">
        <ul className="space-y-2">
          <li>
            <h1 className="text-lg font-semibold">Docs</h1>
          </li>
          <li>
            <Link to="/docs/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/docs/how-it-works">How It Works</Link>
          </li>
          {/* <li>
            <Link to="/docs/examples">Examples</Link>
          </li> */}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

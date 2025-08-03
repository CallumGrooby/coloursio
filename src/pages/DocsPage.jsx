import React from "react";
import { Link, Outlet } from "react-router-dom";

export const DocsPage = () => {
  return <div>
    
  <nav>
    <ul>
      <li>
        <Link to="/docs/about-us">Color Contrast</Link>
        <Link to="/docs/how-it-works">Color Contrast</Link>
        <Link to="/docs/examples">Color Contrast</Link>
      </li>
    </ul>
  </nav>


<Outlet/>
  </div>;
};

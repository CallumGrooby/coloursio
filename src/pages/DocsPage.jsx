import React from "react";
import { Link, Outlet } from "react-router-dom";

export const DocsPage = () => {
  return <div>
    
  <nav>
    <ul>
      <li>
        <Link to="/about-us">Color Contrast</Link>
        <Link to="/how-it-works">Color Contrast</Link>
        <Link to="/examples">Color Contrast</Link>
      </li>
    </ul>
  </nav>


<Outlet/>
  </div>;
};

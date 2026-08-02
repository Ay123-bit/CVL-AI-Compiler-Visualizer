import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        CVL Panel
      </div>

      <nav>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;

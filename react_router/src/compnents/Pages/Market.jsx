 import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link} from "react-router-dom";
import  "./market.css";

function Market() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Market;

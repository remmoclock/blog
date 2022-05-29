import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <Link className="items" to="/">Accueil</Link>
          </li>
          <li className="items">
            <Link className="items" to="/publier">Publier</Link>
          </li>
          <li className="items">
            <Link className="items" to="/contact">Contact</Link>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        =
      </button>
    </nav>
  );
}
export default Navbar;

import React, { Fragment, useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [showColor, setShowColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowColor(true);
      } else setShowColor(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Fragment>
      <nav className={`nav ${showColor && "nav__black"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          className="nav__logo"
          alt="Netflix Logo"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          className="nav__logo-profile"
          alt="Netflix Logo"
        />
      </nav>
    </Fragment>
  );
}

export default Nav;

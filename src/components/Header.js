import React, { useState } from "react";
import "../blocks/header.css";
import { Section } from "./Section";
import arqliteLogo2 from "../images/arqlite-logo-2.svg";
import Box1 from "./Box1.jsx";
import "../blocks/Box1.css";
import NavBarClosedIcon from "./icons/NavBarIcon__closed";
import NavBar from "./NavBar";

function Header({ handleArrangeMeetingClick }) {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  return (
    <Section.Header className="header" id="header">
      <div className="header__wrapper">
        <div className="header__mobile-nav" id="mobile-nav">
          <a className="header__logo-path" href="#header">
            <img
              alt="Arqlite logo"
              src={arqliteLogo2}
              className="header__logo"
            />
          </a>
          <button className="header__navbar-btn" onClick={toggleMobileNav}>
            <NavBarClosedIcon />
          </button>
          <div
            className={
              mobileNavOpened
                ? "header__mobile-nav_opened"
                : "header__mobile-nav_closed"
            }
          >
            <NavBar handleArrangeMeetingClick={handleArrangeMeetingClick} />
          </div>
        </div>
        <h1 className="header__title">
          Recycle<br></br>the unrecyclable
        </h1>
        <Section.CaptionLarge className="header__caption">
          We set up a recycling line of hard-to-recycle plastic waste for your
          company. From zero to production-ready.
        </Section.CaptionLarge>
      </div>
      <Box1 />
    </Section.Header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import "../blocks/header.css";
import { Section } from "./Section";
import arqliteLogo2 from "../images/arqlite-logo-2.svg";
import Box1 from "./Box1.jsx";
import "../blocks/Box1.css";
import NavBar from "./NavBar";

function Header({ handleArrangeMeetingClick }) {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const openMobileNav = () => setMobileNavOpened(true);
  const closeMobileNav = () => setMobileNavOpened(false);

  useEffect(() => {
    const handleClickClose = (event) => {
      if (event.target.classList.contains("header__mobile-nav_bg")) {
        closeMobileNav();
      }
    };

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeMobileNav();
      }
    };

    if (mobileNavOpened) {
      document.addEventListener("click", handleClickClose);
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("click", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [mobileNavOpened]);

  return (
    <Section.Header className="header" id="header">
      <div className="header__wrapper">
        <div className={mobileNavOpened ? "header__mobile-nav_bg" : ".header__mobile-nav_bg_closed"}>
          <div className="header__mobile-nav" id="mobile-nav">
            <a
              className="header__logo-path"
              href="#header"
              onClick={closeMobileNav}
            >
              <img
                alt="Arqlite logo"
                src={arqliteLogo2}
                className="header__logo"
              />
            </a>
            <button
              className={
                mobileNavOpened
                  ? "header__navbar-btn_opened"
                  : "header__navbar-btn_closed"
              }
              onClick={mobileNavOpened ? closeMobileNav : openMobileNav}
            />
            <div
              className={
                mobileNavOpened
                  ? "header__mobile-nav_opened"
                  : "header__mobile-nav_closed"
              }
            >
              <NavBar
                handleArrangeMeetingClick={handleArrangeMeetingClick}
                id={"navbar_mobile"}
                closeMobileNav={closeMobileNav}
              />
            </div>
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

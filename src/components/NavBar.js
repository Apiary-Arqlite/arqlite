import "../blocks/navbar.css";
import React from "react";

import arqliteLogo2 from "../images/arqlite-logo-2.svg";
import { Section } from "./Section";

function NavBar({ handleArrangeMeetingClick, navbarId, logoId, closeMobileNav, hideNavbar }) {

  return (
    <>
      <Section className="navbar" id={navbarId}>
        <a
          className="navbar__logo-path"
          onClick={closeMobileNav}
          href="#header"
        >
          <img
            alt="Arqlite logo"
            src={arqliteLogo2}
            className="navbar-logo"
            id={logoId}
          />
        </a>
        <nav className="navbar__links">
          <Section.NavLink
            onClick={closeMobileNav}
            className="navbar__link navbar__link-calc"
            href="#calculator"
          >
            <Section.CalcIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">Calculate your return</h4>
          </Section.NavLink>

          <Section.NavLink
            onClick={closeMobileNav}
            className="navbar__link navbar__link-wall"
            href="#construction"
          >
            <Section.WallIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">For construction companies</h4>
          </Section.NavLink>

          <Section.NavLink
            onClick={closeMobileNav}
            className="navbar__link navbar__link-factory"
            href="#recycle"
          >
            <Section.FactoryIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">
              For plastic producers and recyclers
            </h4>
          </Section.NavLink>

          <Section.NavLink
            onClick={closeMobileNav}
            className="navbar__link navbar__link-recycle"
            href="#eco"
          >
            <Section.RecycleIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">For eco-conscious brands</h4>
          </Section.NavLink>

          <Section.MeetingCardButton
            orange
            type="button"
            onClick={handleArrangeMeetingClick}
            className="navbar__meeting-btn"
          >
            Arrange a meeting
          </Section.MeetingCardButton>
        </nav>
      </Section>
    </>
  );
}

export default NavBar;

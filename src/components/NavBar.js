import "../blocks/navbar.css";
import React from "react";

import { Section } from "./Section";

function NavBar({ handleArrangeMeetingClick }) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Section className="navbar" id="navbar">
        <nav className="navbar__links">
          <Section.NavLink
            className="navbar__link navbar__link-calc"
            href="#calculator"
          >
            <Section.CalcIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">Calculate your return</h4>
          </Section.NavLink>

          <Section.NavLink
            className="navbar__link navbar__link-wall"
            href="#construction"
          >
            <Section.WallIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">For construction companies</h4>
          </Section.NavLink>

          <Section.NavLink
            className="navbar__link navbar__link-factory"
            href="#recycle"
          >
            <Section.FactoryIcon className="navbar__link-icon" />
            <h4 className="navbar__link-caption">
              For plastic producers and recyclers
            </h4>
          </Section.NavLink>

          <Section.NavLink
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

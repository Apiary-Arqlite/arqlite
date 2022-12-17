import "../blocks/navbar.css";
import React, { useState, useEffect } from "react";

import { Section } from "./Section";
import { debounce } from "../utils/helpers";

function NavBar({ handleArrangeMeetingClick }) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Section className="navbar">
      <div
        className="navbar__links"
      >
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
      </div>
    </Section>
  );
}

export default NavBar;

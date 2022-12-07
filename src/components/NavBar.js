import "../blocks/navbar.css";
import { Section } from "./Section";
import React, { useState } from "react";

import CalcIcon from "./icons/CalcIcon";
import WallIcon from "./icons/WallIcon";
import FactoryIcon from "./icons/FactoryIcon";
import RecycleIcon from "./icons/RecycleIcon";
import { useEffect } from "react";

function NavBar({ handleArrangeMeetingClick }) {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        if (window!== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    })

  return (
    <Section className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
      <div className="navbar__links">
        <Section.HeaderLink
          className="navbar__link navbar__link-calc"
          href="#calculator"
        >
          <CalcIcon className="navbar__link-icon" color="#0091A6" />
          <h4 className="navbar__link-caption">Calculate your return</h4>
        </Section.HeaderLink>
        <Section.HeaderLink
          className="navbar__link navbar__link-wall"
          href="#construction"
        >
          <WallIcon className="navbar__link-icon" color="#0091A6" />
          <h4 className="navbar__link-caption">For construction companies</h4>
        </Section.HeaderLink>
        <Section.HeaderLink
          className="navbar__link navbar__link-factory"
          href="#recycle"
        >
          <FactoryIcon className="navbar__link-icon" color="#0091A6" />
          <h4 className="navbar__link-caption">
            For plastic producers and recyclers
          </h4>
        </Section.HeaderLink>
        <Section.HeaderLink
          className="navbar__link navbar__link-recycle"
          href="#eco"
        >
          <RecycleIcon className="navbar__link-icon" color="#0091A6" />
          <h4 className="navbar__link-caption">For eco-conscious brands</h4>
        </Section.HeaderLink>

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

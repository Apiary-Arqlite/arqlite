import "../blocks/navbar.css";
import React, { useState, useEffect } from "react";

import { Section } from "./Section";
import CalcIcon from "./icons/CalcIcon";
import WallIcon from "./icons/WallIcon";
import FactoryIcon from "./icons/FactoryIcon";
import RecycleIcon from "./icons/RecycleIcon";

function NavBar({ handleArrangeMeetingClick, theme }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (e) => {
    console.log(e.target)
    setHovered(true);
  };

  const handleMouseLeave = (e) => {
    setHovered(false);
  };

  return (
    <Section className="navbar">
      <div className="navbar__links">
        <Section.NavLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="navbar__link navbar__link-calc"
          href="#calculator"
        >
          <CalcIcon
            color={hovered ? "#F05125" : "#0091A6"}
            className="navbar__link-icon"
          />
          <h4 className="navbar__link-caption">Calculate your return</h4>
        </Section.NavLink>
        <Section.NavLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="navbar__link navbar__link-wall"
          href="#construction"
        >
          <WallIcon
            className="navbar__link-icon"
            color={hovered ? "#F05125" : "#0091A6"}
          />
          <h4 className="navbar__link-caption">For construction companies</h4>
        </Section.NavLink>
        <Section.NavLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="navbar__link navbar__link-factory"
          href="#recycle"
        >
          <FactoryIcon
            className="navbar__link-icon"
            color={hovered ? "#F05125" : "#0091A6"}
          />
          <h4 className="navbar__link-caption">
            For plastic producers and recyclers
          </h4>
        </Section.NavLink>
        <Section.NavLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="navbar__link navbar__link-recycle"
          href="#eco"
        >
          <RecycleIcon
            className="navbar__link-icon"
            color={hovered ? "#F05125" : "#0091A6"}
          />
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

import "../blocks/header.css";
import { Section } from "./Section";
import arqliteLogo2 from "../images/arqlite-logo-2.svg";

function Header({handleArrangeMeetingClick}) {
  return (
      <Section.Header className="header">
          <img alt="Arqlite logo" src={arqliteLogo2} className="header__logo" />
          <h1 className="header__title">
            Recycle<br></br>the unrecyclable
          </h1>
          <Section.CaptionLarge className="header__caption">
            We set up a recycling line of hard-to-recycle plastic waste for your
            company. From zero to production-ready.
          </Section.CaptionLarge>
      </Section.Header>
  );
}

export default Header;

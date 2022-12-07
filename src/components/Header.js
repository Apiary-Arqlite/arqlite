import "../blocks/header.css";
import { Section } from "./Section";
import arqliteLogo2 from "../images/arqlite-logo-2.svg";
import CalcIcon from "../images/CalcIcon.png";
import WallIcon from "../images/WallIcon.png";
import FactoryIcon from "../images/FactoryIcon.png";
import RecycleIcon from "../images/RecycleIcon.png";

function Header({ handleArrangeMeetingClick }) {
  return (
    <header>
      <Section.Header className="header">
        <div className="header__main">
          <img alt="Arqlite logo" src={arqliteLogo2} className="header__logo" />
          <h1 className="header__title">
            Recycle<br></br>the unrecyclable
          </h1>
          <Section.CaptionLarge className="header__caption">
            We set up a recycling line of hard-to-recycle plastic waste for your
            company. From zero to production-ready.
          </Section.CaptionLarge>
        </div>
        <div className="header__links">
          <Section.HeaderLink
            className="header__link header__link-calc"
            href="#calculator"
          >
            <img src={CalcIcon} className="header__link-icon" />
            <h4 className="header__link-caption">Calculate your return</h4>
          </Section.HeaderLink>
          <Section.HeaderLink
            className="header__link header__link-wall"
            href="#construction"
          >
            <img src={WallIcon} className="header__link-icon" />
            <h4 className="header__link-caption">For construction companies</h4>
          </Section.HeaderLink>
          <Section.HeaderLink
            className="header__link header__link-factory"
            href="#recycle"
          >
            <img src={FactoryIcon} className="header__link-icon" />
            <h4 className="header__link-caption">
              For plastic producers and recyclers
            </h4>
          </Section.HeaderLink>
          <Section.HeaderLink
            className="header__link header__link-recycle"
            href="#eco"
          >
            <img src={RecycleIcon} className="header__link-icon" />
            <h4 className="header__link-caption">For eco-conscious brands</h4>
          </Section.HeaderLink>

          <Section.MeetingCardButton
            orange
            type="button"
            onClick={handleArrangeMeetingClick}
            className="header__meeting-btn"
          >
            Arrange a meeting
          </Section.MeetingCardButton>
        </div>
      </Section.Header>
    </header>
  );
}

export default Header;

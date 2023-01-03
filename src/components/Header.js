import React, { useState } from 'react';
import '../blocks/header.css';
import { Section } from './Section';
import arqliteLogo2 from '../images/arqlite-logo-2.svg';
import Box1 from './Box1.jsx';
import '../blocks/Box1.css';
import NavBar from './NavBar';
import useMediaQuery from '../hooks/useMediaQuery';

function Header({ handleArrangeMeetingClick }) {
  const isLessThan900 = useMediaQuery('(min-width:900px)');
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  return (
    <Section.Header className="header" id="header">
      <div className="header__wrapper">
        <div className={mobileNavOpened ? 'header__mobile-nav_bg' : ''}>
          <div className="header__mobile-nav" id="mobile-nav">
            <a className="header__logo-path" href="#header">
              <img
                alt="Arqlite logo"
                src={arqliteLogo2}
                className="header__logo"
              />
            </a>
            <button
              className={
                mobileNavOpened
                  ? 'header__navbar-btn_opened'
                  : 'header__navbar-btn_closed'
              }
              onClick={toggleMobileNav}
            />
            <div
              className={
                mobileNavOpened
                  ? 'header__mobile-nav_opened'
                  : 'header__mobile-nav_closed'
              }
            >
              <NavBar
                handleArrangeMeetingClick={handleArrangeMeetingClick}
                id={'navbar_mobile'}
              />
            </div>
          </div>
        </div>
        {isLessThan900 ? (
          <h1 className="header__title">
            Recycle <br></br> the unrecyclable
          </h1>
        ) : (
          <h1 className="header__title">Recycle the unrecyclable</h1>
        )}
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

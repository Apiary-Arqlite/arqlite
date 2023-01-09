import styled from "styled-components/macro";
import DownloadIcon from "./icons/DownloadIcon";
import WallIcon from "./icons/WallIcon";
import FactoryIcon from "./icons/FactoryIcon";
import RecycleIcon from "./icons/RecycleIcon";
import CalcIcon from "./icons/CalcIcon";
import DownArrowIcon from "./icons/DownArrowIcon";

// Create a Section component that will render a <section> tag with some styles
// Colors adapt based on 'dark' prop
export const Section = styled.section`
  background: ${({ theme, ...props }) =>
    props.dark ? theme.colors.dark : theme.colors.white};
  color: ${({ theme, ...props }) =>
    props.dark ? theme.colors.white : theme.colors.dark};

  padding: 80px;
  display: flex;
  flex-direction: column;

  &.section_scroll-margin {
    scroll-margin-top: 200px;
  }

  &#navbar {
    padding: 20px 80px 50px;
  }

  @media (max-width: 1000px) {
    box-sizing: border-box;
    min-width: 375px;

    .header__mobile-nav & {
      padding-bottom: 0px;
    }
    &#navbar {
      padding-bottom: 40px;
    }
    &.section__calculator {
      padding: 80px 80px 0;
    }
  }

  @media (max-width: 900px) {
    scroll-margin-top: 4rem; 
  }

  @media (max-width: 641px) {
    padding: 40px 16px 60px;
    &#navbar_mobile {
      padding-left: 0px;
      padding-right: 0px;
    }
    &.section__calculator {
      padding: 40px 16px 40px;
    }
  }
`;

// Create a SectionMarker component that will render an <h4> tag with styles
const SectionMarker = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.brightB};
  line-height: 22px;
  margin: 0px;
  display: flex;
  margin: 0 0 32px;

  @media (max-width: 480px) {
    margin: 0 0 40px;
    justify-content: space-between;
  }
`;
//Create a SectionMarker Down Arrow to render an SVG
const SectionMarkerIcon = styled(DownArrowIcon)`
  align-self: center;
  margin-left: 14px;
  stroke: ${({ theme }) => theme.colors.brightB};
`;

// Create a SectionTitle component that will render an <h2> tag with styles
const SectionTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[15]};

  line-height: 107%;
  letter-spacing: -0.02em;
  margin: 0;
  @media (max-width: 641px) {
    font-size: ${({ theme }) => theme.fontSizes[11]};
  }
`;

//create a SectionTitleCard to pass props to card title
const SectionTitleCard = styled(SectionTitle)`
  ${(props) => `
    margin:${props.horiz ? "0 0 44px 0" : "0 0 60px 0"};
    `};

  @media (max-width: 641px) {
    font-size: ${({ theme, ...props }) =>
      props.horiz ? theme.fontSizes[13] : theme.fontSizes[11]};
  }
  @media (max-width: 480px) {
    max-width: 350px;
  }
`;
// Create a CaptionLarge component that will render an <p> tag with styles
const CaptionLarge = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.muted};
  font-size: ${({ theme }) => theme.fontSizes[7]};

  line-height: 38px; //1.36
  max-width: 804px;
  margin: 32px 0 40px;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
    line-height: 120%;
  }
`;

const CaptionCalculator = styled(CaptionLarge)`
  margin: 40px auto 33px;
  text-align: center;

  @media (max-width: 1000px) {
    margin: 20px auto 40px;
  }
`;

const NavLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.brightA};
  line-height: 21px;

  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brightB};
  }
  &:hover .navbar__link-icon {
    fill: ${({ theme }) => theme.colors.brightB};
    color: ${({ theme }) => theme.colors.brightB};
  }
`;

const NavCalcIcon = styled(CalcIcon)`
  fill: ${({ theme }) => theme.colors.brightA};
`;

const NavWallIcon = styled(WallIcon)`
  fill: ${({ theme }) => theme.colors.brightA};
`;

const NavFactoryIcon = styled(FactoryIcon)`
  fill: ${({ theme }) => theme.colors.brightA};
`;

const NavRecycleIcon = styled(RecycleIcon)`
  fill: ${({ theme }) => theme.colors.brightA};
`;

const RecycleImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Universal Recycling Symbols for Materials 1, 2, 4, 5, 6 and 7",
}))`
  width: 535px;

  margin: 80px 108px 0 auto;

  @media (max-width: 641px) {
    width: 254px;
    margin: 0;
  }
`;
const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.muted};
  font-size: ${({ theme }) => theme.fontSizes[4]};

  line-height: 20px;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  @media (max-width: 1000px) {
    min-width: 375px;
    box-sizing: border-box;
  }
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.muted};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 20px;

  padding: 0px 80px;
  margin: 0 auto;
  max-width: 1280px;

  @media (max-width: 640px) {
    padding: 0px 16px;
  }
`;

const MeetingCard = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white}; //is this needed
  display: flex;
  flex-direction: row;

  max-width: 1280px;
  min-height: 373px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    max-height: 735px;
  }
`;
const MeetingCardContainer = styled.section`
  background: ${({ theme }) => theme.colors.brightB};
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    border-radius: 0 0 10px 10px;
    padding: 40px 16px;
  }
`;
const MeetingCardButton = styled.button`
  background: ${({ theme, ...props }) =>
    props.orange ? theme.colors.brightB : theme.colors.white};
  color: ${({ theme, ...props }) =>
    props.orange ? theme.colors.white : theme.colors.brightB};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 22px;

  text-align: center;
  letter-spacing: 0.02em;
  width: 237px;
  height: 60px;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  margin: 0 0;
  padding: 0;

  cursor: pointer;
  transition: linear 0.4s;

  @media (max-width: 1000px) {
    margin: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;
const MeetingCardArqliteLicensingDeckLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[5]};

  line-height: 22px;
  letter-spacing: 0.02em;

  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  border: none;
  padding: 0;
  margin-left: 25px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;
const MeetingCardAction = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const MeetingCardIcon = styled(DownloadIcon)`
  stroke: ${({ theme }) => theme.colors.white};
  padding: 0;
  margin: 0 0 0 12px;
  align-self: center;
`;

const TimelineCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 74px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-self: center;
    align-items: center;
    min-width: 375px;
    gap: 64px;
    margin-top: 91px;
  }
`;
Section.Header = Header;
Section.NavLink = NavLink;
Section.CalcIcon = NavCalcIcon;
Section.WallIcon = NavWallIcon;
Section.FactoryIcon = NavFactoryIcon;
Section.RecycleIcon = NavRecycleIcon;
Section.Marker = SectionMarker;
Section.MarkerIcon = SectionMarkerIcon;
Section.Title = SectionTitle;
Section.TitleCard = SectionTitleCard;
Section.CaptionLarge = CaptionLarge;
Section.CaptionCalculator = CaptionCalculator;
Section.RecycleImage = RecycleImage;
Section.Footer = Footer;
Section.MeetingCard = MeetingCard;
Section.MeetingCardContainer = MeetingCardContainer;
Section.MeetingCardButton = MeetingCardButton;
Section.MeetingCardArqliteLicensingDeckLink =
  MeetingCardArqliteLicensingDeckLink;
Section.MeetingCardAction = MeetingCardAction;
Section.MeetingCardIcon = MeetingCardIcon;

Section.TimelineCards = TimelineCards;

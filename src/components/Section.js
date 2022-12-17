import styled from "styled-components/macro";
import DownloadIcon from "./icons/DownloadIcon";
import WallIcon from "./icons/WallIcon";
import FactoryIcon from "./icons/FactoryIcon";
import RecycleIcon from "./icons/RecycleIcon";
import CalcIcon from "./icons/CalcIcon";

// Create a Section component that will render a <section> tag with some styles
// Colors adapt based on 'dark' prop
export const Section = styled.section`
  background: ${({ theme, ...props }) =>
    props.dark ? theme.colors.dark : theme.colors.white};
  color: ${(props) => (props.dark ? "#fff" : "#54585b")};
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

//Create a styledSection to render horiz card top padding
export const SectionHoriz = styled(Section)`
  padding: 64px 80px 97px 80px;
`;
//Create a styledSection to render vert card top padding
export const SectionVert = styled(Section)`
  padding-bottom: 118px;
`;
export const SectionVertLong = styled(Section)`
  padding-bottom: 72px;
`;

// Create a SectionMarker component that will render an <h4> tag with styles
const SectionMarker = styled.h4`
  color: #f05125;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0px;
  display: flex;
  //trying this to standardize spacing
  margin: 0 0 100px;
`;

// Create a SectionTitle component that will render an <h2> tag with styles
const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 107%;
  letter-spacing: -0.02em;
  //trying this to standardize spacing
  margin: 0 0 44px;
`;

// Create a CaptionLarge component that will render an <p> tag with styles
const CaptionLarge = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  max-width: 804px;
`;

const NavLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.brightA};
  font-weight: 700;
  line-height: 21px;
  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.brightB};
  }
  &:hover .navbar__link-icon {
    fill: ${({ theme: { colors } }) => colors.brightB};
    color: ${({ theme: { colors } }) => colors.brightB};
  }
`;

const NavCalcIcon = styled(CalcIcon)`
  fill: ${({ theme: { colors } }) => colors.brightA};
`;

const NavWallIcon = styled(WallIcon)`
  fill: ${({ theme: { colors } }) => colors.brightA};
`;

const NavFactoryIcon = styled(FactoryIcon)`
  fill: ${({ theme: { colors } }) => colors.brightA};
`;

const NavRecycleIcon = styled(RecycleIcon)`
  fill: ${({ theme: { colors } }) => colors.brightA};
`;

const Footer = styled.footer`
  margin: 0;
  background-color: #54585b;
  box-sizing: border-box;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
`;

const Header = styled.header`
  padding: 0px 80px;
  margin: 0 auto;
  background-color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 1280px;
`;

const MeetingCard = styled.section`
  padding: 80px;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  max-width: 1280px;

  background: #ffffff;
`;
const MeetingCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #f05125;
  padding: 40px;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;
const MeetingCardButton = styled.button`
  background: ${(props) => (props.orange ? " #F05125" : "#FFFFFF")};
  color: ${(props) => (props.orange ? "#FFFFFF" : "#F05125")};
  width: 237px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-family: "Archivo";
  /* font-style: normal; */
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  margin: 0;
  padding: 0;
  margin-right: 25px;
  cursor: pointer;
  transition: linear 0.4s;
`;
const MeetingCardDownloadButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.02em;
  background: transparent;
  color: #ffffff;
  align-items: center;
  border: none;
  padding: 0;
  border-radius: 10px;
  cursor: pointer;
`;
const MeetingCardAction = styled.section`
  display: flex;
  flex-direction: row;
`;
const MeetingCardIcon = styled(DownloadIcon)`
  padding: 0;
  margin: 0;
  margin-left: 12px;
  align-self: center;
  stroke: ${({ theme: { colors } }) => colors.white};
`;

const TimelineCards = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
Section.Header = Header;
Section.NavLink = NavLink;
Section.CalcIcon = NavCalcIcon;
Section.WallIcon = NavWallIcon;
Section.FactoryIcon = NavFactoryIcon;
Section.RecycleIcon = NavRecycleIcon;
Section.Marker = SectionMarker;
Section.Title = SectionTitle;
Section.CaptionLarge = CaptionLarge;
Section.Footer = Footer;
Section.MeetingCard = MeetingCard;
Section.MeetingCardContainer = MeetingCardContainer;
Section.MeetingCardButton = MeetingCardButton;
Section.MeetingCardDownloadButton = MeetingCardDownloadButton;
Section.MeetingCardAction = MeetingCardAction;
Section.MeetingCardIcon = MeetingCardIcon;
Section.TimelineCards = TimelineCards;

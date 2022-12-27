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

  //change from 1000 to 600 to test
  //check paddings 40 16 60 instead of 40 16
  @media (max-width: 1000px) {
    box-sizing: border-box;
    min-width: 375px;
    padding: 40px 16px 60px;
  }
`;

// Create a SectionMarker component that will render an <h4> tag with styles
const SectionMarker = styled.h4`
  color: #f05125;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0px;
  display: flex;
  margin: 0 0 32px;
`;

// Create a SectionTitle component that will render an <h2> tag with styles
const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 107%;
  letter-spacing: -0.02em;
  margin: 0;
  @media (max-width: 700px) {
    font-weight: 44px;
    font-size: 44px;
  }
`;

//create a SectionTitleCard to pass props to card title
const SectionTitleCard = styled(SectionTitle)`
  ${(props) => `
    margin:${props.horiz ? "0 0 44px 0" : "0 0 60px 0"};
    `};

  @media (max-width: 700px) {
    ${(props) => `
      font-weight:${props.horiz ? "52" : "44"}
      font-size:${props.horiz ? "52px" : "44px"}
`}
  }
  @media (max-width:500px){
  max-width: 350px;
}
`;
// Create a CaptionLarge component that will render an <p> tag with styles
const CaptionLarge = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  max-width: 804px;
  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 120%;
  }
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
  @media (max-width: 1000px) {
    min-width: 375px;
    box-sizing: border-box;
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
  display: flex;
  flex-direction: row;
  color: #ffffff;
  max-width: 1280px;
  min-height:373px;
  background: #ffffff;
  box-sizing:border-box;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height:735px;
    min-height:100%
  }
`;
const MeetingCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #f05125;
  padding: 40px;
  border-radius: 10px 0 0 10px;
  box-sizing:border-box;
 
  @media (max-width: 900px) {
    border-radius: 0 0 10px 10px;
    padding: 40px 16px;
  }
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
  @media (max-width: 1000px) {
    margin: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;
const MeetingCardArqliteLicensingDeckLink = styled.a`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.02em;
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  border: none;
  padding: 0;
  border-radius: 10px;
  cursor: pointer;
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
  padding: 0;
  margin: 0;
  margin-left: 12px;
  align-self: center;
  stroke: ${({ theme: { colors } }) => colors.white};
  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const TimelineCards = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 20px;
  //add to keep 0 margin on common h2 element
  margin-top: 74px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-self: center;
    align-items: center;
    min-width: 375px;
    gap: 64px;
    //add to keep correct margin on top
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
Section.Title = SectionTitle;
Section.TitleCard = SectionTitleCard;
Section.CaptionLarge = CaptionLarge;
Section.Footer = Footer;
Section.MeetingCard = MeetingCard;
Section.MeetingCardContainer = MeetingCardContainer;
Section.MeetingCardButton = MeetingCardButton;
Section.MeetingCardArqliteLicensingDeckLink =
  MeetingCardArqliteLicensingDeckLink;
Section.MeetingCardAction = MeetingCardAction;
Section.MeetingCardIcon = MeetingCardIcon;
Section.TimelineCards = TimelineCards;

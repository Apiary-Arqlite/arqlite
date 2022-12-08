import styled from "styled-components/macro";

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
//Create a styledSection to render horiz card top padding
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
  color: #0091a6;
  font-weight: 700;
  line-height: 21px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    path {
      fill: ${({ theme: { colors } }) => colors.brightB} rect {
        fill: ${({ theme: { colors } }) => colors.brightB};
      }
      h4 {
        color: ${({ theme: { colors } }) => colors.brightB};
      }
    }
  }
`;

const Footer = styled.footer`
  margin: 0 auto 60px;
  background-color: #54585b;
  box-sizing: border-box;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 1280px;
`;

const Header = styled.header`
  padding: 80px;
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
  margin-bottom: 40px;
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
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  margin: 0;
  padding: 0;
  margin-right: 25px;
  cursor: pointer;
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

Section.Header = Header;
Section.NavLink = NavLink;
Section.Marker = SectionMarker;
Section.Title = SectionTitle;
Section.CaptionLarge = CaptionLarge;
Section.Footer = Footer;
Section.MeetingCard = MeetingCard;
Section.MeetingCardContainer = MeetingCardContainer;
Section.MeetingCardButton = MeetingCardButton;
Section.MeetingCardDownloadButton = MeetingCardDownloadButton;
Section.MeetingCardAction = MeetingCardAction;

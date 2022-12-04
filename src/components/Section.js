import styled from "styled-components";

// Create a Section component that will render a <section> tag with some styles
// Colors adapt based on 'dark' prop
export const Section = styled.section`
  background: ${(props) => (props.dark ? "#54585b" : "#f5f5f5")};
  color: ${(props) => (props.dark ? "#fff" : "#54585b")};
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

// Create a SectionMarker component that will render an <h4> tag with styles
const SectionMarker = styled.h4`
  color: #f05125;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0px;
  display: flex;
`;

// Create a SectionHeader component that will render an <h2> tag with styles
const SectionHeader = styled.h2`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 107%;
  letter-spacing: -0.02em;
`;

// Create a CaptionLarge component that will render an <p> tag with styles
const CaptionLarge = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  max-width: 804px;
`;

const Header = styled.header`
  padding: 80px;
  margin: 0 auto;
  background-color: #54585b;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 1280px;
`;

const HeaderLink = styled.a`
  font-size: 20px;
  color: #0091a6;
  font-weight: 700;
  line-height: 21px;
  text-decoration: none;
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

Section.Header = Header;
Section.HeaderLink = HeaderLink;
Section.Marker = SectionMarker;
Section.Header = SectionHeader;
Section.CaptionLarge = CaptionLarge;
Section.Footer = Footer;

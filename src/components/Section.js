import styled from "styled-components";

// Create a SectionWrapper component that will render a <section> tag with some styles
// Colors adapt based on 'dark' prop
export const SectionWrapper = styled.section`
  background: ${(props) => (props.dark ? "#54585b" : "#f5f5f5")};
  color: ${(props) => (props.dark ? "#fff" : "#54585b")};
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

// Create a SectionMarker component that will render an <h4> tag with styles
export const SectionMarker = styled.h4`
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
export const SectionHeader = styled.h2`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 107%;
  letter-spacing: -0.02em;
`;

// Create a CaptionLarge component that will render an <p> tag with styles
export const CaptionLarge = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
`;

import styled from 'styled-components';

// Create a Section component that will render a <section> tag with some styles
// Colors adapt based on 'dark' prop
export const Section = styled.section`
  background: ${(props) => (props.dark ? '#54585b' : '#f5f5f5')};
  color: ${(props) => (props.dark ? '#fff' : '#54585b')};
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

// Create a SectionMarker component that will render an <h4> tag with styles
const SectionMarker = styled.h4`
  color: #f05125;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0px;
  display: flex;
`;

// Create a SectionHeader component that will render an <h2> tag with styles
const SectionHeader = styled.h2`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 107%;
  letter-spacing: -0.02em;
`;

// Create a CaptionLarge component that will render an <p> tag with styles
const CaptionLarge = styled.p`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  max-width: 804px;
`;
const Footer = styled.footer`
  margin: 0 auto;
  background-color: #54585b;
  box-sizing: border-box;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 1280px;
`;
const MeetingCard = styled.section`
  background: #f05125;
  border-radius: 10px;
  margin: 120px 80px;
  padding-left:40px;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  
`;
const MeetingCardContainer=styled.section`
display:flex;
flex-direction:column;
width:100%;
height:100%;

`
const MeetingCardButton = styled.button`
  background: ${(props) => (props.orange ? ' #F05125' : '#FFFFFF')};
  color: ${(props) => (props.orange ? '#FFFFFF' : '#F05125')};
  width: 237px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  margin:0;
  padding:0;
`;
const MeetingCardDownload=styled.p`
display:flex;
flex-direction:row;
font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #ffffff;
`
const MeetingCardAction=styled.section`
display:flex;
flex-direction:row;

`


Section.Marker = SectionMarker;
Section.Header = SectionHeader;
Section.CaptionLarge = CaptionLarge;
Section.Footer = Footer;
Section.MeetingCard = MeetingCard;
Section.MeetingCardContainer=MeetingCardContainer;
Section.MeetingCardButton = MeetingCardButton;
Section.MeetingCardDownload=MeetingCardDownload;
Section.MeetingCardAction=MeetingCardAction;

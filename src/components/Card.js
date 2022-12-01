//components/Card.js
import styled from "styled-components/macro";
import downloadIconBlack from "../images/download-icon-black.svg";
import downloadIconOrange from "../images/download-icon-orange.svg";

//Create a CardWrapper component that will render a <div> with display:grid for cards
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 414px));
  column-gap: 20px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 414px));
    row-gap: 20px;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 347px));
    row-gap: 20px;
  }
`;

//Create a CardItem component that will render a <div> with styles for a card item
const CardItem = styled.div`
  /* background-color: ${(theme) => theme.colors.white}; */
  ${(props) => `
flex-direction: ${props.horiz ? "row-reverse" : "column"};
`}
  display: flex;
  position: relative;
  max-width: 414px;
  /* row-gap:16px; */
`;

//Create a CardImg component that will render an <img> styles for a card image
const CardImage = styled.img`
  ${(props) => `
    max-width: ${props.horiz ? "158px" : "100%"};
    border-radius: ${props.horiz ? "0 10px 10px 0" : "10px 10px 0 0"};
    width:${props.horiz ? "38%" : "100%"};
    flex-shrink:${props.horiz ? "2" : "0"};
  `}
`;

//Create a CardTextBox that will render flex container for Card Text Elements
const CardTextBox = styled.div`
  ${(props) => `
    padding:${props.horiz ? "0 24px 20px" : "0 24px 28px"};
    max-width: ${props.horiz ? "256px" : "414px"};
    flex-grow: ${props.horiz ? "0" : "1"};
    flex-shrink:${props.horiz ? "1" : "0"};
    width:${props.horiz ? "62%" : "100%"};
    border-radius:${props.horiz ? "10px 0 0 10px" : "0 0 10px 10px"};
`}

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #ffffff;
  justify-items: flex-start;
  align-items: flex-start;
`;

//Card Heading that will render styled <h3> used in Vert Card
const CardHeading = styled.h3`
  /* background-color: ${(theme) => theme.colors.white}; */
  /* font-weight:${(theme) => theme.fontWeight.bold}; */
  /* font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold}; */
  font-weight: 700;
  /* font-size: 28px; */
  font-size: 1.75em;
  line-height: 1.14;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 16px;
  /* margin-bottom: 0; */
  border: 1px solid blue;
`;
//Card Text that will render styled <p> for Horiz and Vert Card paragraph
const CardParagraph = styled.p`
  border: 1px solid red;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  //vert settings that work here:
  /* margin-top: ${(props) => (props.horiz ? "16px" : "auto")}; */
  margin-top: ${(props) => (props.horiz ? "16px" : "0")};
  /* margin-top: ${(props) => (props.horiz ? "0" : "16px")}; */
  /* flex-grow: 1; */

  margin-bottom: 30px;
`;

//Card Caption that will render styled <p> for caption on Horiz Card
const CardCaption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.6;
  color: #8f999a;

  margin: 16px 0 0;
`;

//Card Heading that will render styled <h4> for Heading on Horiz Card
const CardHeadingSmall = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.1;
  /* margin: 8px 0 0; */
  margin: 8px 0 16px;
  max-width: 150px;
  /* flex-grow: 1; */
`;
//Card link wrapper that will render styled <div> for link on Horiz card
const CardLinkWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  margin-top: auto;
`;
//Card link icon that will render styled <img> for link icon on Horiz Card
const CardLinkIcon = styled.img`
  width: 12px;
  height: 14px;
  margin-right: 14px;
  background-image: url("${downloadIconBlack}");
  background-size: 12px 14px;
  //seperate files for each icon - icon dir in components ie download.js
  //hover will be part of download.js
  //keep the container make a div
  //import into main the download icon put inside the cardlink icon wrapper
  //make the hover optional with a prop- if statement if this included hover rule
`;
//Card link text that will render styled <p> for Link text on  Horiz Card
const CardLinkText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;

  &:hover {
    cursor: pointer;
    color: #f05125;
  }
`;

CardItem.Image = CardImage;
// CardItem.Heading = CardHeading;
// CardItem.Paragraph = CardParagraph;
// CardItem.TextBox = CardTextBox;
// CardItem.CardCaption = CardCaption;
// CardItem.CardHeadingSmall = CardHeadingSmall;
// CardItem.CardLinkWrapper = CardLinkWrapper;
// CardItem.CardLinkIcon = CardLinkIcon;
// CardItem.CardLinkText = CardLinkText;

export default function CardGrid({ children }) {
  return (
    <div>
      <CardsWrapper>{children}</CardsWrapper>
    </div>
  );
}

CardGrid.Card = CardItem;
CardGrid.Card.Image = CardImage;
CardGrid.Card.TextBox = CardTextBox;
CardGrid.Card.Heading = CardHeading;
CardGrid.Card.Paragraph = CardParagraph;
CardGrid.Card.Caption = CardCaption;
CardGrid.Card.SmallHeading = CardHeadingSmall;
CardGrid.Card.LinkWrapper = CardLinkWrapper;
CardGrid.Card.LinkIcon = CardLinkIcon;
CardGrid.Card.LinkText = CardLinkText;

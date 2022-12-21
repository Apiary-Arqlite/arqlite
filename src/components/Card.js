//components/Card.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
// import Theme from "./Theme";
import styled from "styled-components/macro";
import DownloadIcon from "./icons/DownloadIcon";

/* ---------------------------- styled components --------------------------- */
//Create a CardWrapper component that will render a <div> with display:grid for cards
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 414px));
  column-gap: 20px;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 414px;
    /* grid-template-columns: 1fr; */
    row-gap: 20px;
  }
`;

//Create a CardItem component that will render a <div> with styles for a card item
const CardItem = styled.div`
  ${(props) => `
    flex-direction: ${props.horiz ? "row-reverse" : "column"};
  `}
  display: flex;
  position: relative;
  max-width: 414px;
  flex-basis: 414px;
  //flex bases 414px may keep width
`;

//Create a CardImg component that will render an <img> styles for a card image
const CardImage = styled.div`
  ${(props) =>
    props.horiz
      ? `
    border-radius:0 10px 10px 0;
    width:auto;
    
    height:100%;
    flex-basis:158px;
  `
      : `
  max-width: 100%;
  border-radius:10px 10px 0 0;
  width: 100%;
  height:200px;
 
  `};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

//Create a CardTextBox that will render flex container for Card Text Elements
const CardTextBox = styled.div`
  ${(props) => props.horiz?`
    padding:0 24px 20px;
    // max-width: ${props.horiz ? "" : "414px"};
    // flex-grow: ${props.horiz ? "0" : "1"};

    width:auto;
    border-radius:10px 0 0 10px;
    flex-basis:256px;
`:`
padding:0 24px 28px;
max-width:414px;
flex-grow:1;
width:100%;
border-radius: 0 0 10px 10px;

`};

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #ffffff;
  justify-items: flex-start;
  align-items: flex-start;
`;
//Create a CardTextBox that will render flex container for Card Text Elements
// const CardTextBox = styled.div`
//   ${(props) => `
//     padding:${props.horiz ? "0 24px 20px" : "0 24px 28px"};
//     max-width: ${props.horiz ? "" : "414px"};
//     flex-grow: ${props.horiz ? "0" : "1"};

//     width:${props.horiz ? "auto" : "100%"};
//     border-radius:${props.horiz ? "10px 0 0 10px" : "0 0 10px 10px"};
//     flex-basis:${props.horiz ? "256px" : ""};
// `}

//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   background-color: #ffffff;
//   justify-items: flex-start;
//   align-items: flex-start;
// `;

//Card Heading that will render styled <h3> used in Vert Card (Caption Large)
const CardHeading = styled.h3`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.dark};
  line-height: 1.14;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 16px;
`;
//Card Text that will render styled <p> for Horiz and Vert Card paragraph
const CardParagraph = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.muted};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  color: ${({ theme: { colors } }) => colors.dark};

  line-height: 1.25;
  margin-top: ${(props) => (props.horiz ? "16px" : "0")};
  margin-bottom: ${(props) => (props.horiz ? "28px" : "0")};
`;

//Card Caption that will render styled <p> for caption on Horiz Card
const CardCaption = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  color: ${({ theme: { colors } }) => colors.light};
  line-height: 1.6;

  margin: 16px 0 0;
`;

//Card Heading that will render styled <h4> for Heading on Horiz Card
const CardHeadingSmall = styled.h4`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.dark};
  line-height: 1.1;

  margin: 8px 0 0px;
  max-width: 150px;
`;
//Card link wrapper that will render styled <div> for link on Horiz card
const CardLinkWrapper = styled.a`
  display: flex;
  justify-self: flex-end;
  margin-top: auto;
  &:hover {
    cursor: pointer;
    path {
      stroke: ${({ theme: { colors } }) => colors.brightB};
    }
    p {
      color: ${({ theme: { colors } }) => colors.brightB};
    }
  }
`;

//Card link icon that will render styled <svg> for link icon on Horiz Card
const CardLinkIcon = styled(DownloadIcon)`
  margin-right: 14px;
  stroke: ${({ theme: { colors } }) => colors.dark};
`;

//Card link text that will render styled <p> for Link text on  Horiz Card
const CardLinkText = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.dark};

  line-height: 1.25;
  margin: 0;
`;

CardItem.Image = CardImage;

export default function Cards({ children }) {
  return <CardsWrapper>{children}</CardsWrapper>;
}

Cards.Card = CardItem;
Cards.Image = CardImage;
Cards.TextBox = CardTextBox;
Cards.Heading = CardHeading;
Cards.Paragraph = CardParagraph;
Cards.Caption = CardCaption;
Cards.SmallHeading = CardHeadingSmall;
Cards.LinkWrapper = CardLinkWrapper;
Cards.LinkIcon = CardLinkIcon;
Cards.LinkText = CardLinkText;

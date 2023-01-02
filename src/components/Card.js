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

  @media (max-width: 1000px) {
    grid-template-columns: 414px;
    /* grid-template-columns: 1fr; */
    row-gap: 20px;
  }
  @media (max-width: 641px) {
    grid-template-columns: 343px;
    /* grid-template-columns: 1fr; */
    row-gap: 24px;
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
  ${(props) =>
    props.horiz
      ? `
    padding:0 24px 20px;
    width:auto;
    border-radius:10px 0 0 10px;
    flex-basis:256px;
`
      : `
padding:0 24px 28px;
max-width:414px;
flex-grow:1;
width:100%;
border-radius: 0 0 10px 10px;

`};

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  justify-items: flex-start;
  align-items: flex-start;
`;

//Card Heading that will render styled <h3> used in Vert Card (Caption Large)
const CardHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.14;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 0;
`;
//Card Text that will render styled <p> for Horiz and Vert Card paragraph
const CardParagraph = styled.p`
  margin-top: 16px;
  margin-bottom: ${(props) => (props.horiz ? "28px" : "0")};
  font-weight: ${({ theme }) => theme.fontWeights.muted};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.25;
`;

//Card Caption that will render styled <p> for caption on Horiz Card
const CardCaption = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.6;

  margin: 16px 0 0;
`;

//Card Heading that will render styled <h4> for Heading on Horiz Card
const CardHeadingSmall = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.dark};
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
      stroke: ${({ theme }) => theme.colors.brightB};
    }
    p {
      color: ${({ theme }) => theme.colors.brightB};
    }
  }
`;

//Card link icon that will render styled <svg> for link icon on Horiz Card
const CardLinkIcon = styled(DownloadIcon)`
  margin-right: 14px;
  stroke: ${({ theme }) => theme.colors.dark};
`;

//Card link text that will render styled <p> for Link text on  Horiz Card
const CardLinkText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
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

//components/Card.js
import styled from "styled-components/macro";

//Create a CardWrapper component that will render a <div> with display:grid for cards
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 414px));
  column-gap: 20px;
  justify-content: center;
  margin: 0 auto;
  border: 1px red solid;
`;

//Create a CardItem component that will render a <div> with styles for a card item
const CardItem = styled.div`
  /* background-color: ${(theme) => theme.colors.white}; */
  /* border-collapse: separate; */
  border: 1px blue solid;
  position: relative;
  max-width: 414px;
  display: flex;
  flex-direction: ${(props) => (props.horiz ? "row-reverse" : "column")};
`;

//Create a CardImg component that will render an <img> styles for a card image
const CardImage = styled.img`
  max-width: ${(props) => (props.horiz ? "158px" : "100%")};

  border: 1px green solid;
  border-radius: ${(props) =>
    props.horiz ? "0 10px 10 px 0" : "10px 10px 0 0"};
`;

//Create a CardTextBox that will render flex container for Card Text Elements
const CardTextBox = styled.div`
  padding: ${(props) => (props.horiz ? "0 24px 20px" : "0 24px 28px")};
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  max-width:${(props) => (props.horiz ? "256px" : "414px")}
  flex-grow: ${(props) => (props.horiz ? "0" : "1")};

  background-color: #ffffff;

  border-radius: ${(props) =>
    props.horiz ? "10px 0 0 10px" : "0 0 10px 10px"};
  border: 1px solid orange;
`;

//Card Heading that will render styled <h3> used in Vert Card
const CardHeading = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 16px;
  /* margin-bottom: 0; */
  & .line-break {
    max-width: 300px;
  }
`;
//Card Text that will render styled <p> for Horiz and Vert Card paragraph
const CardParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  //vert settings that work here:
  margin-top: auto;
  /* margin-top: 16px; */
  margin-bottom: 30px;
  justify-self: flex-end;
  //need to put prop in cardheading to remove margin bottom:28px
  //will also need a prop here to change bottom margin/top forwide card
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
  margin: 8px 0 16px;
  max-width: 150px;
`;
//Card link wrapper that will render styled <div> for link on Horiz card
const CardLinkWrapper = styled.div`
  display: flex;
`;
//Card link icon that will render styled <img> for link icon on Horiz Card
const CardLinkIcon = styled.img`
  width: 12px;
  height: 14px;
  margin-right: 14px;
`;
//Card link text that will render styled <p> for Link text on  Horiz Card
const CardLinkText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
`;

CardItem.Image = CardImage;
CardItem.Heading = CardHeading;
CardItem.Paragraph = CardParagraph;
CardItem.TextBox = CardTextBox;
CardItem.CardCaption = CardCaption;
CardItem.CardHeadingSmall = CardHeadingSmall;
CardItem.CardLinkWrapper = CardLinkWrapper;
CardItem.CardLinkIcon = CardLinkIcon;
CardItem.CardLinkText = CardLinkText;

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

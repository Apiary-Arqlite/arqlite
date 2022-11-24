//components/Card.js
import styled from "styled-components/macro";
import lwbackfill from "../images/lw-backfill-image.png";

//Create a CardWrapper component that will render a <div> with display:grid for cards
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 414px));
  column-gap: 20px;
  justify-content: center;

  margin: 0 auto;
  border: 1px red solid;
`;

//Create a CardItem component that will render a <div> with styles for a card item
export const CardItem = styled.div`
  max-width: 414px;
  /* background-color: ${(theme) => theme.colors.white}; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-collapse: separate;
  border: 1px blue solid;
`;

//Create a CardImg component that will render an <img> styles for a card image
const CardImage = styled.img`
//need to check heights
//card no p height: 200px
//card w p height:180px
  max-width: 100%;
  display: block;
  object-fit: cover;
  border: 1px green solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardHeading = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;

  margin-top: 20px;

  & .line-break {
    display: block;
  }
`;

const CardParagraph=styled.p` 
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  margin-top: 16px;
  margin-bottom:58px;
  //need to put prop in cardheading to remove margin bottom:28px
//will also need a prop here to change bottom margin forwide card
`

CardItem.Image = CardImage;
CardItem.Heading = CardHeading;

export default function CardGrid({children}) {
  return (
    <div>
      <CardWrapper>
        <CardItem>
          <CardItem.Image src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardItem.Heading>
        </CardItem>
        <CardItem>
          <CardImage src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardItem.Heading>
        </CardItem>
        <CardItem>
          <CardImage src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardItem.Heading>
        </CardItem>
      </CardWrapper>

      <div>tall vertical cards</div>
      <CardWrapper>
        <CardItem>
          <CardItem.Image src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Laminated packaging </span>recycling
          </CardItem.Heading>
          <CardParagraph>
            <span>PE+PP+PET+BOPP, ABS, and more, can all be  </span>processed into a high quality blend
          </CardParagraph>
        </CardItem>
        <CardItem>
          <CardImage src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardItem.Heading>
        </CardItem>
        <CardItem>
          <CardImage src={lwbackfill} />
          <CardItem.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardItem.Heading>
        </CardItem>
      </CardWrapper>
    </div>
  );
}

CardGrid.Card = CardItem;

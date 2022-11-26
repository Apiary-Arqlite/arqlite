import CardGrid from "./Card";

import { constructionCards, ecoCards, productCards } from "../utils/data";

function Main() {
  console.log(constructionCards);

  return (
    <main>
      <div>Testing</div>
      <CardGrid>
        {constructionCards.map((card, i) => (
          <CardGrid.Card key={i} card={card}>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.Heading>{card.heading}</CardGrid.Card.Heading>
          </CardGrid.Card>
        ))}
      </CardGrid>
      <div> text box</div>
      <CardGrid>
        {constructionCards.map((card, i) => (
          <CardGrid.Card key={i} card={card}>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.TextBox>
              <CardGrid.Card.Heading>{card.heading}</CardGrid.Card.Heading>
            </CardGrid.Card.TextBox>
          </CardGrid.Card>
        ))}
      </CardGrid>
      <div> vert wrapper</div>
      <CardGrid>
        {ecoCards.map((card, i) => (
          <CardGrid.Card key={i} card={card}>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.TextBox>
              <CardGrid.Card.Heading >{card.heading}</CardGrid.Card.Heading>
              <CardGrid.Card.Paragraph>
                {card.paragraph}
              </CardGrid.Card.Paragraph>
            </CardGrid.Card.TextBox>
          </CardGrid.Card>
        ))}
      </CardGrid>
      <div> horiz wrapper</div>
      <CardGrid>
        {productCards.map((card, i) => (
          <CardGrid.Card key={i} card={card} horiz>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.TextBox horiz>
              <CardGrid.Card.Caption>{card.smallHeading}</CardGrid.Card.Caption>
              <CardGrid.Card.SmallHeading>{card.heading}</CardGrid.Card.SmallHeading>
              <CardGrid.Card.Paragraph>
                {card.paragraph}
              </CardGrid.Card.Paragraph>
              <CardGrid.Card.LinkText>{card.linkText}</CardGrid.Card.LinkText>
            </CardGrid.Card.TextBox>
          </CardGrid.Card>
        ))}
      </CardGrid>
    </main>
  );
}

export default Main;

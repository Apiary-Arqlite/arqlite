import CardGrid from "./Card";
import lwbackfill from "../images/lw-backfill-image.png"
import {constructionCards,ecoCards} from "../utils/data"


function Main() {
  console.log(constructionCards);

  return (
    <main>
      <div>Testing</div>
      <CardGrid>
        {constructionCards.map((card, i) => (
          <CardGrid.Card key={i} card={card}>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.Heading>
              {card.heading}
            </CardGrid.Card.Heading>
          </CardGrid.Card>
        ))}
      </CardGrid>

     
    </main>
  );
}

export default Main;

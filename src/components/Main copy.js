import CardGrid from "./Card";
import data from "../utils/data"

function Main() {
  return (
    <main>
      <div>Testing</div>
      <CardGrid>
        {data.constructionCards.map((card) => (
          <CardGrid.Card horizonaal>
            <CardGrid.Card.Image src={card.lwbackfill} />
            <CardGrid.Card.Heading>
              <span className="line-break">Lightweight </span>Backfill Aggregate
            </CardGrid.Card.Heading>
          </CardGrid.Card>
        ))}
      </CardGrid>

      <CardGrid>
        <CardGrid.Card>
          <CardGrid.Card.Image src={lwbackfill} />
          <CardGrid.Card.Heading>
            <span className="line-break">Lightweight </span>Backfill Aggregate
          </CardGrid.Card.Heading>
          <CardGrid.Card.Paragraph>blahlbalhasdfasdf</CardGrid.Card.Paragraph>
        </CardGrid.Card>
      </CardGrid>
    </main>
  );
}

export default Main;

import CardGrid from "./Card";
import { constructionCards, ecoCards, productCards } from "../utils/data";
import { Section } from "../components/Section";
import markerIconPath from "../images/arrow-down-orange.png";


import recycleImgPath from '../images/recycle-plastics-icons.png';
import MeetingCard from './MeetingCard';
import pelletProductionImg from '../images/pellet-production-image.png';
import buildingImg from '../images/building-image.png';

function Main() {
  const handleArrangeMeetingClick = () => {
    console.log('implement schedule meeting logic');
  };
  const handleDownloadClick = () => {
    // using Java Script method to get PDF file
    fetch('ArqliteLicensingDeck.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'ArqliteLicensingDeck.pdf';
        alink.click();
      });
    });
  };
  return (
    <main>
      <Section dark>
        <Section.Header>Our products</Section.Header>
        <CardGrid>
        {productCards.map((card, i) => (
          <CardGrid.Card key={i} card={card} horiz>
            <CardGrid.Card.Image horiz src={card.image} />

            <CardGrid.Card.TextBox horiz>
              <CardGrid.Card.Caption>{card.smallHeading}</CardGrid.Card.Caption>
              <CardGrid.Card.SmallHeading>
                {card.heading}
              </CardGrid.Card.SmallHeading>
              <CardGrid.Card.Paragraph horiz>
                {card.paragraph}
              </CardGrid.Card.Paragraph>
              <CardGrid.Card.LinkWrapper>
                <CardGrid.Card.LinkIconS />
                <CardGrid.Card.LinkText>{card.linkText}</CardGrid.Card.LinkText>
              </CardGrid.Card.LinkWrapper>
            </CardGrid.Card.TextBox>
          </CardGrid.Card>
        ))}
      </CardGrid>
      </Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={pelletProductionImg}
        handleDownloadClick={handleDownloadClick}
      ></MeetingCard>
      <Section>
        <Section.CaptionLarge className="section__caption_center">
          Calculate your hardware footprint for a post-consumer setup
        </Section.CaptionLarge>
        <Section.CaptionLarge className="section__caption_center">
          Calculate the impact of a multiple revenue stream process
        </Section.CaptionLarge>
      </Section>
      <Section dark>
        <Section.Marker>
          For construction companies{' '}
          <img className="section__marker-icon" src={markerIconPath} />

        </Section.Marker>
        <Section.Header>
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.Header>
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
      </Section>
      <Section>
        <Section.Marker>
          For plastic companies and recyclers{' '}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Header>
          Recycle plastics <br></br> that no one else can
        </Section.Header>
        <Section.CaptionLarge>
          We set up a recycling line of hard-to-recycle plastic waste for your
          company. From zero to production-ready. Add value to the plastics
          currently going to landfill or incineration.
        </Section.CaptionLarge>
        <img className="section__recycle-icons" src={recycleImgPath} />
      </Section>
      <Section dark>
        <Section.Marker>
          For eco-conscious brands{' '}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Header>
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{' '}
          into sustainable products
        </Section.Header>
        <CardGrid>
        {ecoCards.map((card, i) => (
          <CardGrid.Card key={i} card={card}>
            <CardGrid.Card.Image src={card.image} />
            <CardGrid.Card.TextBox>
              <CardGrid.Card.Heading>{card.heading}</CardGrid.Card.Heading>
              <CardGrid.Card.Paragraph>
                {card.paragraph}
              </CardGrid.Card.Paragraph>
            </CardGrid.Card.TextBox>
          </CardGrid.Card>
        ))}
      </CardGrid>
      </Section>
      <Section>
        <Section.Header>
          We set up <br></br> the process for you
        </Section.Header>
      </Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={buildingImg}
        handleDownloadClick={handleDownloadClick}
      ></MeetingCard>
    </main>
  );
}

export default Main;

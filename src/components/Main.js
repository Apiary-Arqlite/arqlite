import NavBar from './NavBar';
import { constructionCards, ecoCards, productCards } from '../utils/data';
import { Section } from '../components/Section';
import Calculator from './Calculator.tsx';
import markerIconPath from '../images/arrow-down-orange.png';
import Cards from './Card';
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
      <NavBar handleArrangeMeetingClick={handleArrangeMeetingClick} />
      <Section dark>
        <Section.Title>Our products</Section.Title>
        <Cards>
          {productCards.map((card, i) => (
            <Cards.Card key={i} card={card} horiz>
              <Cards.Image horiz src={card.image} alt={card.alt} />

              <Cards.TextBox horiz>
                <Cards.Caption>{card.caption}</Cards.Caption>
                <Cards.SmallHeading>{card.heading}</Cards.SmallHeading>
                <Cards.Paragraph horiz>{card.paragraph}</Cards.Paragraph>
                <Cards.LinkWrapper>
                  <Cards.LinkIcon />
                  <Cards.LinkText>{card.linkText}</Cards.LinkText>
                </Cards.LinkWrapper>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section id='calculator'>
        <Section.CaptionLarge className='section__caption_center'>
          Calculate your hardware footprint for a post-consumer setup
        </Section.CaptionLarge>
        <Section.CaptionLarge className='section__caption_center'>
          Calculate the impact of a multiple revenue stream process
        </Section.CaptionLarge>
        <Calculator />
      </Section>
      <Section>
        <MeetingCard
          handleArrangeMeetingClick={handleArrangeMeetingClick}
          img={pelletProductionImg}
          handleDownloadClick={handleDownloadClick}
        ></MeetingCard>
      </Section>

      <Section dark id='construction'>
        <Section.Marker>
          For construction companies{' '}
          <img className='section__marker-icon' src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.Title>
        <Cards>
          {constructionCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image src={card.image} alt={card.alt} />
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section id='recycle'>
        <Section.Marker>
          For plastic companies and recyclers{' '}
          <img className='section__marker-icon' src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Recycle plastics <br></br> that no one else can
        </Section.Title>
        <Section.CaptionLarge>
          We set up a recycling line of hard-to-recycle plastic waste for your
          company. From zero to production-ready. Add value to the plastics
          currently going to landfill or incineration.
        </Section.CaptionLarge>
        <img className='section__recycle-icons' src={recycleImgPath} />
      </Section>
      <Section dark id='eco'>
        <Section.Marker>
          For eco-conscious brands{' '}
          <img className='section__marker-icon' src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{' '}
          into sustainable products
        </Section.Title>
        <Cards>
          {ecoCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image src={card.image} alt={card.alt} />
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>
                <Cards.Paragraph>{card.paragraph}</Cards.Paragraph>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section>
        <Section.Title>
          We set up <br></br> the process for you
        </Section.Title>
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

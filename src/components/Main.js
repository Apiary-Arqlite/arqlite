import NavBar from "./NavBar";
import * as data from "../utils/data";
// import { constructionCards, ecoCards, productCards } from "../utils/data";
import { Section, SectionHoriz, SectionVert, SectionVertLong} from "../components/Section";
import markerIconPath from "../images/arrow-down-orange.png";
import Cards from "./Card";
import recycleImgPath from "../images/recycle-plastics-icons.png";
import MeetingCard from "./MeetingCard";
import pelletProductionImg from "../images/pellet-production-image.png";
import buildingImg from "../images/building-image.png";

function Main({onDownloadClick}) {
  const handleArrangeMeetingClick = () => {
    console.log("implement schedule meeting logic");
  };

  // const handleDownloadClick = (pdf) => {
  //   // using Java Script method to get PDF file
  //   fetch(pdf).then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = pdf;
  //       alink.click();
  //     });
  //   });
  // };
  // const handleDownloadClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("ArqliteLicensingDeck.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "ArqliteLicensingDeck.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <main>
      <NavBar handleArrangeMeetingClick={handleArrangeMeetingClick}/>
      <SectionHoriz dark>
        <Section.Title>Our products</Section.Title>
        <Cards>
          {data.productCards.map((card, i) => (
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
      </SectionHoriz>
      <Section id="calculator">
        <Section.CaptionLarge className="section__caption_center">
          Calculate your hardware footprint for a post-consumer setup
        </Section.CaptionLarge>
        <Section.CaptionLarge className="section__caption_center">
          Calculate the impact of a multiple revenue stream process
        </Section.CaptionLarge>
      </Section>
      <Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={pelletProductionImg}
        // handleDownloadClick={handleDownloadClick}
      ></MeetingCard>
      </Section>

      <SectionVertLong dark id="construction">
        <Section.Marker>
          For construction companies{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.Title>
        <Cards>
          {data.constructionCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image src={card.image} alt={card.alt} />
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </SectionVertLong>
      <Section id="recycle">
        <Section.Marker>
          For plastic companies and recyclers{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Recycle plastics <br></br> that no one else can
        </Section.Title>
        <Section.CaptionLarge>
          We set up a recycling line of hard-to-recycle plastic waste for your
          company. From zero to production-ready. Add value to the plastics
          currently going to landfill or incineration.
        </Section.CaptionLarge>
        <img className="section__recycle-icons" src={recycleImgPath} />
      </Section>

      <SectionVert dark id="eco">
        <Section.Marker>
          For eco-conscious brands{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title>
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{" "}
          into sustainable products
        </Section.Title>
        <Cards>
          {data.ecoCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image src={card.image} alt={card.alt} />
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>
                <Cards.Paragraph>{card.paragraph}</Cards.Paragraph>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </SectionVert>
      <Section>
        <Section.Title>
          We set up <br></br> the process for you
        </Section.Title>
      </Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={buildingImg}
        onDownloadClick={()=>onDownloadClick("ArqliteLicensingDeck.pdf")}
      ></MeetingCard>
    </main>
  );
}

export default Main;

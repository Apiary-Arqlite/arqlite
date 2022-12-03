import { Section } from "../components/Section";
import markerIconPath from "../images/arrow-down-orange.png";

import recycleImgPath from "../images/recycle-plastics-icons.png";
import MeetingCard from "./MeetingCard";
import pelletProductionImg from "../images/pellet-production-image.png"
import buildingImg from '../images/building-image.png';

function Main() {
  const handleArrangeMeetingClick=()=>{
    console.log("schedule meeting");
  }
  const handleDownloadClick=()=>{
    console.log("download");
  }
  return (
    <main>
      <Section dark>
        <Section.Header>Our products</Section.Header>
      </Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={pelletProductionImg}
        handleDownloadClick={handleDownloadClick}></MeetingCard>
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
          For construction companies{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Header>
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.Header>
      </Section>
      <Section>
        <Section.Marker>
          For plastic companies and recyclers{" "}
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
          For eco-conscious brands{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Header>
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{" "}
          into sustainable products
        </Section.Header>
      </Section>
      <Section>
        <Section.Header>
          We set up <br></br> the process for you
        </Section.Header>
        
      </Section>
      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={buildingImg}handleDownloadClick={handleDownloadClick}></MeetingCard>
    </main>
  );
}

export default Main;

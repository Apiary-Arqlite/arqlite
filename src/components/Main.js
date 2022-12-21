import NavBar from "./NavBar";
import * as data from "../utils/data";
import * as pdfs from "../utils/downloads";
import React, { useState, useEffect } from "react";
import Calculator from "./Calculator/Calculator.tsx";
import { Section } from "../components/Section";
import markerIconPath from "../images/arrow-down-orange.png";
import Cards from "./Card";
import recycleImgPath from "../images/recycle-plastics-icons.png";
import MeetingCard from "./MeetingCard";
import pelletProductionImg from "../images/pellet-production-image.png";
import buildingImg from "../images/building-image.png";
import ArrangeMeetingForm from "./ArrangeMeetingForm";
import InfoToolModal from "./InfoToolModal";
import TimelineCard from "./TimelineCard";

function Main({ onDownloadClick }) {
  const [isArrangeMeetingFormOpen, setIsArrangeMeetingFormOpen] =
    useState(false);
  const [isInfoToolModalOpen, setIsInfoToolOpen] = useState(false);
  const [isInfoToolStatus, setInfoToolStatus] = useState("");

  const isAnyModalOpen = isArrangeMeetingFormOpen || isInfoToolModalOpen;

  const handleArrangeMeetingClick = () => {
    setIsArrangeMeetingFormOpen(true);
  };
  const closeModal = () => {
    setIsArrangeMeetingFormOpen(false);
    setIsInfoToolOpen(false);
  };

  useEffect(() => {
    const handleClickClose = (event) => {
      if (event.target.classList.contains("modal_opened")) {
        closeModal();
      }
    };

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isAnyModalOpen) {
      document.addEventListener("click", handleClickClose);
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("click", handleClickClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isAnyModalOpen]);

  const handleSendRequest = () => {
    //implement logic for submit request
    console.log("implement logic for submit request");
    setIsArrangeMeetingFormOpen(false);
    setIsInfoToolOpen(true);
    //if request submit is successful or if not setInfoToolStatus("fail");
    setInfoToolStatus("success");
  };

  return (
    <main>
      <NavBar handleArrangeMeetingClick={handleArrangeMeetingClick} />
      <Section dark>
        <Section.Title marginBottom="44px">Our products</Section.Title>
        <Cards>
          {data.productCards.map((card, i) => (
            <Cards.Card key={i} card={card} horiz>
              {/* <Cards.Image horiz src={card.image} alt={card.alt} /> */}
              <Cards.Image
                horiz
                backgroundImage={card.image}
                role="img"
                aria-label={card.alt}
              />
              <Cards.TextBox horiz>
                <Cards.Caption>{card.caption}</Cards.Caption>
                <Cards.SmallHeading>{card.heading}</Cards.SmallHeading>
                <Cards.Paragraph horiz>{card.paragraph}</Cards.Paragraph>
                <Cards.LinkWrapper onClick={() => onDownloadClick(card.pdf)}>
                  <Cards.LinkIcon />
                  <Cards.LinkText>{card.linkText}</Cards.LinkText>
                </Cards.LinkWrapper>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section id="calculator">
        <Section.CaptionLarge className="section__caption_center">
          Calculate your hardware footprint for a post-consumer setup
        </Section.CaptionLarge>
        <Section.CaptionLarge className="section__caption_center">
          Calculate the impact of a multiple revenue stream process
        </Section.CaptionLarge>
        <Calculator />
      </Section>

      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={pelletProductionImg}
      />

      <Section dark id="construction">
        <Section.Marker>
          For construction companies{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title marginBottom="60px">
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.Title>
        <Cards>
          {data.constructionCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              {/* <Cards.Image src={card.image} alt={card.alt} /> */}
              <Cards.Image
                backgroundImage={card.image}
                role="img"
                aria-label={card.alt}
              />
              {/* <Cards.Image backgroundImage={card.image} alt={card.alt}/> */}
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section id="recycle">
        <Section.Marker>
          For plastic companies and recyclers{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title marginBottom="32px">
          Recycle plastics <br></br> that no one else can
        </Section.Title>
        <Section.CaptionLarge>
          We set up a recycling line of hard-to-recycle plastic waste for your
          company. From zero to production-ready. Add value to the plastics
          currently going to landfill or incineration.
        </Section.CaptionLarge>
        <img className="section__recycle-icons" src={recycleImgPath} />
      </Section>

      <Section dark id="eco">
        <Section.Marker>
          For eco-conscious brands{" "}
          <img className="section__marker-icon" src={markerIconPath} />
        </Section.Marker>
        <Section.Title marginBottom="60px">
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{" "}
          into sustainable products
        </Section.Title>
        <Cards>
          {data.ecoCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image
                backgroundImage={card.image}
                role="img"
                aria-label={card.alt}
              />
              <Cards.TextBox>
                <Cards.Heading>{card.heading}</Cards.Heading>

                <Cards.Paragraph>{card.paragraph}</Cards.Paragraph>
              </Cards.TextBox>
            </Cards.Card>
          ))}
        </Cards>
      </Section>
      <Section>
        <Section.Title marginBottom="74px">
          We set up <br></br> the process for you
        </Section.Title>

        <Section.TimelineCards>
          {data.timelineCards.map((card, i) => {
            return (
              <TimelineCard
                key={i}
                title={card.title}
                step={card.step}
                icon={card.icon}
                element={card.element}
                alt={card.alt}
              />
            );
          })}
        </Section.TimelineCards>
      </Section>

      <MeetingCard
        handleArrangeMeetingClick={handleArrangeMeetingClick}
        img={buildingImg}
      />
      <ArrangeMeetingForm
        isOpen={isArrangeMeetingFormOpen}
        onClose={closeModal}
        onSendRequest={handleSendRequest}
      />
      <InfoToolModal
        isOpen={isInfoToolModalOpen}
        onClose={closeModal}
        status={isInfoToolStatus}
      />
    </main>
  );
}

export default Main;

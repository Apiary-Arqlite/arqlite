import NavBar from './NavBar';
import * as data from '../utils/data';
import React from 'react';
import { Slider } from './Slider/Slider';
import Calculator from './Calculator/Calculator.tsx';
import { Section } from '../components/Section';
import markerIconPath from '../images/arrow-down-orange.png';
import Cards from './Card';
import recycleImgPath from '../images/recycle-plastics-icons.png';
import recycleImgMobPath from '../images/recycle-icons-mobile.png';
import MeetingCard from './MeetingCard';
import pelletProductionImg from '../images/pellet-production-image.png';
import buildingImg from '../images/building-image.png';
import TimelineCard from './TimelineCard';
import useMediaQuery from '../hooks/useMediaQuery';

function Main({ onDownloadClick, handleArrangeMeetingClick }) {
  const isLessThan641 = useMediaQuery('(min-width:641px)');
  console.log(recycleImgMobPath);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0px';
    } else {
      document.getElementById('navbar').style.top = '-500px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <main>
      <NavBar
        id={'navbar'}
        handleArrangeMeetingClick={handleArrangeMeetingClick}
      ></NavBar>
      <Section dark>
        <Section.TitleCard horiz>Our products</Section.TitleCard>
        <Cards>
          {data.productCards.map((card, i) => (
            <Cards.Card key={i} card={card} horiz>
              {/* <Cards.Image horiz src={card.image} alt={card.alt} /> */}
              <Cards.Image
                horiz
                backgroundImage={card.image}
                role='img'
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
      <Section id='calculator'>
        <Section.CaptionLarge className='section__caption_center'>
          Calculate your hardware footprint for a post-consumer setup
        </Section.CaptionLarge>
        <Slider />
        <Section.CaptionLarge className='section__caption_center'>
          Calculate the impact of a multiple revenue stream process
        </Section.CaptionLarge>
        <Calculator />
      </Section>
      <Section id='meeting'>
        <MeetingCard
          handleArrangeMeetingClick={handleArrangeMeetingClick}
          img={pelletProductionImg}
        />
      </Section>
      <Section dark id='construction'>
        <Section.Marker>
          For construction companies{' '}
          <img className='section__marker-icon' src={markerIconPath} />
        </Section.Marker>
        <Section.TitleCard>
          Produce your own low-carbon <br></br> & LEED building materials
        </Section.TitleCard>
        <Cards>
          {data.constructionCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              {/* <Cards.Image src={card.image} alt={card.alt} /> */}
              <Cards.Image
                backgroundImage={card.image}
                role='img'
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

        <Section.RecycleImage
          src={isLessThan641 ? recycleImgPath : recycleImgMobPath}
        />
      </Section>

      <Section dark id='eco'>
        <Section.Marker>
          For eco-conscious brands{' '}
          <img className='section__marker-icon' src={markerIconPath} />
        </Section.Marker>
        <Section.TitleCard>
          Recycle post-industrial <br></br> and post-consumer waste <br></br>{' '}
          into sustainable products
        </Section.TitleCard>
        <Cards>
          {data.ecoCards.map((card, i) => (
            <Cards.Card key={i} card={card}>
              <Cards.Image
                backgroundImage={card.image}
                role='img'
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
        <Section.Title>
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
      <Section>
        <MeetingCard
          handleArrangeMeetingClick={handleArrangeMeetingClick}
          img={buildingImg}
        />
      </Section>
    </main>
  );
}

export default Main;

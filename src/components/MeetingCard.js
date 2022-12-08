import {Section} from '../components/Section';
import ArrangeMeetingForm from './ArrangeMeetingForm';
import downloadIcon from '../images/download-icon-white.png';
import React,{ useState,useEffect } from 'react';
const MeetingCard=({ handleDownloadClick, img}) =>{
const [isArrangeMeetingFormOpen,setIsArrangeMeetingFormOpen]=useState(false);


useEffect(() => {
  const handleClickClose = (event) => {
    if (event.target.classList.contains('modal_opened')) {
      closeModal();
    }
  };

  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  if (isArrangeMeetingFormOpen) {
    document.addEventListener('click', handleClickClose);
    document.addEventListener('keydown', handleEscClose);
  }

  return () => {
    document.removeEventListener('click', handleClickClose);
    document.removeEventListener('keydown', handleEscClose);
  };
}, [isArrangeMeetingFormOpen]);
const handleArrangeMeetingClick=()=>{
  setIsArrangeMeetingFormOpen(true);
}
const closeModal = () => {
  setIsArrangeMeetingFormOpen(false);}
  
  return (
    <Section.MeetingCard>
      <Section.MeetingCardContainer>
        <Section.Title className="meetingCard__header">Arrange a meeting</Section.Title>
        <Section.CaptionLarge className="meetingCard__text">
          We will discuss your specific case and the details of our partnership
        </Section.CaptionLarge>
        <Section.MeetingCardAction>
          <Section.MeetingCardButton
            type="button"
            onClick={handleArrangeMeetingClick}
          >
            Arrange a meeting
          </Section.MeetingCardButton>
          <Section.MeetingCardDownloadButton
            type="button"
            onClick={handleDownloadClick}
          >
            Download our licensing Deck
            <img
              className="meetingCard__icon"
              src={downloadIcon}
              alt="download icon"
            />
          </Section.MeetingCardDownloadButton>
        </Section.MeetingCardAction>
      </Section.MeetingCardContainer>
      <img className="meetingCard__img" src={img} alt="company img" />
      <ArrangeMeetingForm onClose={closeModal} isOpen={isArrangeMeetingFormOpen} />
    </Section.MeetingCard>
  );
}
export default MeetingCard;

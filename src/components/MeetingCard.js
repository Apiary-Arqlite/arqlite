import {Section} from '../components/Section';
import downloadIcon from '../images/download-icon-white.png';
function MeetingCard({handleArrangeMeetingClick,img}) {
  return (
    <Section.MeetingCard>
      <Section.MeetingCardContainer>
        <Section.Header className="meetingCard__header">Arrange a meeting</Section.Header>
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
          
           <Section.MeetingCardArqliteLicensingDeckLink 
            href="https://docs.google.com/presentation/d/1mPSghnCJKGwfaGw6Fkz0dcMUZ8NSmlH__FzODv4d0Dw/edit#slide=id.g17e28408c82_0_13" target="_blank" rel="noreferrer">
            Arqlite Licensing Deck
            <img
              className="meetingCard__icon"
              src={downloadIcon}
              alt="download icon"
            />
           
           </Section.MeetingCardArqliteLicensingDeckLink > 
        </Section.MeetingCardAction>
      </Section.MeetingCardContainer>
      <img className="meetingCard__img" src={img} />
    </Section.MeetingCard>
  );
}
export default MeetingCard;

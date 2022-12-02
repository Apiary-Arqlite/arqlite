import {Section} from '../components/Section';
import buildingImg from '../images/building-image.png';
import downloadIcon from '../images/download-icon-white.png';
function MeetingCard({handleArrangeMeetingClick, img}) {
  return (
    <Section.MeetingCard>
      <Section.MeetingCardContainer>
        <Section.Header>Arrange a meeting</Section.Header>
        <Section.CaptionLarge>
          We will discuss your specific case and the details of our partnership
        </Section.CaptionLarge>
        <Section.MeetingCardAction>
          <Section.MeetingCardButton
            type="button"
            onClick={handleArrangeMeetingClick}
          >
            Arrange a meeting
          </Section.MeetingCardButton>
          <Section.MeetingCardDownload>
            Download our licensing Deck
            <img
              className="meetingCard__icon"
              src={downloadIcon}
              alt="download icon"
            />
          </Section.MeetingCardDownload>
        </Section.MeetingCardAction>
      </Section.MeetingCardContainer>
      <img className="meetingCard__img" src={img} />
    </Section.MeetingCard>
  );
}
export default MeetingCard;

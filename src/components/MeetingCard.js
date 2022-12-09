import {Section} from '../components/Section';
import downloadIcon from '../images/download-icon-white.png';

const MeetingCard = ({handleDownloadClick, handleArrangeMeetingClick, img}) => {
  return (
    <Section.MeetingCard>
      <Section.MeetingCardContainer>
        <Section.Title className="meetingCard__header">
          Arrange a meeting
        </Section.Title>
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
    </Section.MeetingCard>
  );
};
export default MeetingCard;

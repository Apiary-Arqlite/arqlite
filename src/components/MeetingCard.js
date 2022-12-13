import { Section } from "../components/Section";

function MeetingCard({ handleArrangeMeetingClick, onDownloadClick, img }) {
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
            className="meetingCard__button"
            onClick={handleArrangeMeetingClick}
          >
            Arrange a meeting
          </Section.MeetingCardButton>
          <Section.MeetingCardDownloadButton
            type="button"
            onClick={onDownloadClick}
            className="meetingCard__download-button"
          >
            Download our licensing Deck
            <Section.MeetingCardIcon />
          </Section.MeetingCardDownloadButton>
        </Section.MeetingCardAction>
      </Section.MeetingCardContainer>
      <img className="meetingCard__img" src={img} alt="company img" />
    </Section.MeetingCard>
  );
}
export default MeetingCard;

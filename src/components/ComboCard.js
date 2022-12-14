// WIP example of how you could do this with config instead of composition
export default function ComboCard({ card, horiz, headerSize, children }) {
  return (
    <div>
      <Cards.Image horiz={horiz} backgroundImage={card.image} />
      <Cards.TextBox horiz>
        {card.caption && <Cards.Caption>{card.caption}</Cards.Caption>}
        {card.heading &&
          (headerSize === "large" ? (
            <Cards.Heading>{card.heading}</Cards.Heading>
          ) : (
            <Cards.SmallHeading>{card.heading}</Cards.SmallHeading>
          ))}
        <Cards.Paragraph horiz>{card.paragraph}</Cards.Paragraph>
        <Cards.LinkWrapper onClick={() => onDownloadClick(card.pdf)}>
          <Cards.LinkIcon />
          <Cards.LinkText>{card.linkText}</Cards.LinkText>
        </Cards.LinkWrapper>
      </Cards.TextBox>
    </div>
  );
}

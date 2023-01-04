// import element from '../images/side-element.svg';
const TimelineCard = ({title, step, icon, element,alt}) => {
  return (
    <div className="card__container">
      <img className="card__icon" src={icon} alt={alt} />
      <img className="card__side-element" src={element} alt="" />
      <p className="card__text">{step}</p>
      <p className="card__title">{title}</p>
    </div>
  );
};
export default TimelineCard;

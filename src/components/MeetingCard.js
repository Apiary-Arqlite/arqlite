import { Section } from "../components/Section";
import buildingImg from "../images/building-image.png"
function MeetingCard(){
  return(
   
    <Section.MeetingCard>
<div className="card__container">
  <div className="card__text">
    <p>Arrange a meeting</p>
  </div>
  <img className="card__img"src={buildingImg}/>
</div>
    </Section.MeetingCard>
  
  )
}
export default MeetingCard;
import styled from "styled-components";
import {
  SectionWrapper,
  CaptionLarge,
  SectionHeader,
  SectionMarker,
} from "./Section";
import imgPath from "../images/recycle-plastics-icons.png";
import iconPath from "../images/arrow-down-orange.png";

const RecyclersHeader = styled(SectionHeader)`
  margin-top: 100px;
  width: 600px;
`;

const RecyclersCaption = styled(CaptionLarge)`
  width: 804px;
  margin: 0;
`;

const RecyclersSection = () => {
  return (
    <SectionWrapper>
      <SectionMarker>
        For plastic companies and recyclers <img className="section__marker-icon" src={iconPath} />
      </SectionMarker>
      <RecyclersHeader>
        Recycle plastics that no one else can use
      </RecyclersHeader>
      <RecyclersCaption>
        We set up a recycling line of hard-to-recycle plastic waste for your
        company. From zero to production-ready. Add value to the plastics
        currently going to landfill or incineration.
      </RecyclersCaption>
      <img className="section__recycle-icons" src={imgPath} />
    </SectionWrapper>
  );
};

export default RecyclersSection;

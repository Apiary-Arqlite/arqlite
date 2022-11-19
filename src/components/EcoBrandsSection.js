import styled from "styled-components";
import {
  SectionWrapper,
  CaptionLarge,
  SectionHeader,
  SectionMarker,
} from "./Section";
import iconPath from "../images/arrow-down-orange.png";

const EcoHeader = styled(SectionHeader)`
margin-top: 32px;
  width: 1172px;
`;

const EcoBrandsSection = () => {
  return (
    <SectionWrapper dark>
      <SectionMarker>
        For eco-conscious brands <img className="section__marker-icon" src={iconPath} />
      </SectionMarker>
      <EcoHeader>
        Recycle post-industrial <br></br>and post-consumer waste<br></br> into
        sustainable products
      </EcoHeader>
    </SectionWrapper>
  );
};

export default EcoBrandsSection;

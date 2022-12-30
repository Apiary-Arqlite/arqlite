import React from "react";
import styled from "styled-components";

const NBClosedIcon = styled.svg`
  width: 24px;
  height: 14px;
`;

export default function NavBarClosedIcon({ ...rest }) {
  return (
    <NBClosedIcon
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="24" height="2" rx="1" fill="#8F999A" />
      <rect y="6" width="24" height="2" rx="1" fill="#8F999A" />
      <rect y="12" width="24" height="2" rx="1" fill="#8F999A" />
    </NBClosedIcon>
  );
}

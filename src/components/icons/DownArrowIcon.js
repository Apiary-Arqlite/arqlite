import React from "react";
import styled from "styled-components/macro";

const DAIcon = styled.svg`
  width: 21px;
  height: 24px;

  flex: none;
`;
export default function DownArrowIcon({ color = "", ...rest }) {
  return (
    <DAIcon
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      //   viewBox="0 0 21 20"
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M10.1147 5V15.5M10.1147 15.5L6.11475 11.5M10.1147 15.5L14.1147 11.5" />
    </DAIcon>
  );
}

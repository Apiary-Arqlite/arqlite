import React from "react";
import styled from "styled-components";

const DLIcon = styled.svg`
  width: 20px;
  height: 20px;

   @media (max-width: 1000px) {
    width: 12px;
    height: 14px;
  } 
`;
export default function DownloadIcon({ color = "", ...rest }) {
  return (
    <DLIcon
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="m10 3v9l-4-4m4 4 4-4m-10 5v4h12v-4" />
    </DLIcon>
  );
}

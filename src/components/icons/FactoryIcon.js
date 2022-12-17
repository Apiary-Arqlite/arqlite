import React from "react";
import styled from "styled-components";

const FactIcon = styled.svg`
  width: 44px;
  height: 40px;
`;

export default function FactoryIcon({ color = "", ...rest }) {
  return (
    <FactIcon
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 18H44V38C44 39.1046 43.1046 40 42 40H2C0.895431 40 0 39.1046 0 38V18Z"
        fill={color}
      />
      <rect x="36" width="8" height="18" fill={color} />
      <path
        d="M20.7249 12.0597L36 18H18V13.9237C18 12.517 19.4138 11.5498 20.7249 12.0597Z"
        fill={color}
      />
      <path
        d="M2.72489 12.0597L18 18H0V13.9237C0 12.517 1.41382 11.5498 2.72489 12.0597Z"
        fill={color}
      />
      <rect x="36" y="2" width="8" height="2" fill="white" />
      <rect x="36" y="6" width="8" height="2" fill="white" />
    </FactIcon>
  );
}

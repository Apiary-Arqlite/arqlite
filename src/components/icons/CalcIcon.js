import React from "react";

export default function CalcIcon({
  color = "",
  ...rest
}) {
  return (
    <svg
      fill="none"
      viewBox="0 0 32 40"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="40"
      {...rest}
    >
      <rect width="32" height="40" rx="2" fill={color} />
      <rect x="2" y="2" width="28" height="11" rx="2" fill="white" />
      <rect x="2" y="15" width="4" height="4" rx="2" fill="white" />
      <rect x="2" y="21" width="4" height="4" rx="2" fill="white" />
      <rect x="2" y="27" width="4" height="4" rx="2" fill="white" />
      <rect x="2" y="33" width="4" height="4" rx="2" fill="white" />
      <rect x="8" y="15" width="4" height="4" rx="2" fill="white" />
      <rect x="8" y="21" width="4" height="4" rx="2" fill="white" />
      <rect x="8" y="27" width="4" height="4" rx="2" fill="white" />
      <rect x="8" y="33" width="4" height="4" rx="2" fill="white" />
      <rect x="14" y="15" width="4" height="4" rx="2" fill="white" />
      <rect x="14" y="21" width="4" height="4" rx="2" fill="white" />
      <rect x="14" y="27" width="4" height="4" rx="2" fill="white" />
      <rect x="14" y="33" width="4" height="4" rx="2" fill="white" />
      <rect x="20" y="15" width="4" height="4" rx="2" fill="white" />
      <rect x="20" y="21" width="4" height="4" rx="2" fill="white" />
      <rect x="20" y="27" width="4" height="4" rx="2" fill="white" />
      <rect x="20" y="33" width="4" height="4" rx="2" fill="white" />
      <rect x="26" y="15" width="4" height="4" rx="2" fill="white" />
      <rect x="26" y="21" width="4" height="4" rx="2" fill="white" />
      <rect x="26" y="27" width="4" height="4" rx="2" fill="white" />
      <rect x="26" y="33" width="4" height="4" rx="2" fill="white" />
    </svg>
  );
}

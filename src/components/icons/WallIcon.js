import React from "react";

export default function WallIcon({
  color = ""
}) {
  return (
    <svg
      width="78"
      height="28"
      viewBox="0 0 78 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="20" width="16" height="8" rx="2" fill={color} />
      <rect x="8" y="10" width="16" height="8" rx="2" fill={color} />
      <rect width="16" height="8" rx="2" fill={color} />
      <rect x="18" y="20" width="16" height="8" rx="2" fill={color} />
      <rect x="26" y="10" width="16" height="8" rx="2" fill={color} />
      <rect x="18" width="16" height="8" rx="2" fill={color} />
      <rect x="36" y="20" width="16" height="8" rx="2" fill={color} />
      <rect x="44" y="10" width="16" height="8" rx="2" fill={color} />
      <rect x="36" width="16" height="8" rx="2" fill={color} />
      <rect x="54" y="20" width="16" height="8" rx="2" fill={color} />
      <rect x="62" y="10" width="16" height="8" rx="2" fill={color} />
      <rect x="54" width="16" height="8" rx="2" fill={color} />
    </svg>
  );
}

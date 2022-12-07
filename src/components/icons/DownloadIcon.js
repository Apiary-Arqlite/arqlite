import React from "react";

export default function DownloadimportIcon({
  width = 12,
  height = 14,
  color = "",
  className,
}) {
  return (
    <svg
      fill="none"
      viewBox="0 0 14 16"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <path
        d="m7 1v9m0 0-4-4m4 4 4-4"
        stroke={color}
        // stroke="#54585B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m1 11v4h12v-4"
        stroke={color}
        // stroke="#54585B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

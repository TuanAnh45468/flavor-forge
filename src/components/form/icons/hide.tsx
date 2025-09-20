import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const HideIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.5 10c-1.875 3.333-5.208 5.417-7.5 5.417S4.375 13.333 2.5 10c1.875-3.333 5.208-5.417 7.5-5.417s5.625 2.084 7.5 5.417z"
      fill={color}
    />
    <circle cx="10" cy="10" r="2.5" fill="white" />
  </svg>
);

export const ShowIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.075 2.075l15.85 15.85M17.5 10c-1.875 3.333-5.208 5.417-7.5 5.417S4.375 13.333 2.5 10c1.25-2.208 3.458-3.875 5.833-4.583m3.334 0C12.458 5.125 13.25 4.583 14.167 4.583c1.291 0 3.125 2.084 3.333 2.292"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7.5 7.5c-.417.417-.833 1.25-.833 2.5s.416 2.083.833 2.5m5-5c.417.417.833 1.25.833 2.5s-.416 2.083-.833 2.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const MessageIcon: React.FC<IconProps> = ({
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
      d="M16.667 2.5H3.333c-.92 0-1.666.746-1.666 1.667v8.333c0 .92.746 1.667 1.666 1.667H15l3.333 2.5V4.167c0-.921-.746-1.667-1.666-1.667zM15 12.5H3.333V4.167H16.667V12.5z"
      fill={color}
    />
  </svg>
);

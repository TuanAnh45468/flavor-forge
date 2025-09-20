import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ProfileIcon: React.FC<IconProps> = ({
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
      d="M10 1.667c2.3 0 4.167 1.866 4.167 4.166S12.3 10 10 10s-4.167-1.867-4.167-4.167S7.7 1.667 10 1.667zM10 12.5c4.6 0 8.333 2.233 8.333 5v1.667H1.667V17.5c0-2.767 3.733-5 8.333-5z"
      fill={color}
    />
  </svg>
);

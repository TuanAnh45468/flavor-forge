import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LockIcon: React.FC<IconProps> = ({
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
      d="M15.833 7.5h-.416V5.833C15.417 3.533 13.55 1.667 11.25 1.667h-2.5C6.45 1.667 4.583 3.533 4.583 5.833V7.5h-.416C3.25 7.5 2.5 8.25 2.5 9.167v7.5c0 .916.75 1.666 1.667 1.666h11.666c.917 0 1.667-.75 1.667-1.666v-7.5c0-.917-.75-1.667-1.667-1.667zM6.25 5.833c0-1.383 1.117-2.5 2.5-2.5h2.5c1.383 0 2.5 1.117 2.5 2.5V7.5h-7.5V5.833zm8.333 10.834H5.417v-5.834h9.166v5.834z"
      fill={color}
    />
  </svg>
);

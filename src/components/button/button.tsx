"use client";
import styled from "styled-components";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  shape?: "default" | "rounded";
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const getVariantStyles = (variant: string, theme: any, disabled: boolean) => {
  if (disabled) {
    return `
      background-color: ${theme?.colors?.alerts?.buttonDisabled || "#C43A3B"};
      color: ${theme?.colors?.others?.white || "#FFFFFF"};
      border-color: ${theme?.colors?.alerts?.buttonDisabled || "#C43A3B"};
      cursor: not-allowed;
      opacity: 1;

      &:hover {
        background-color: ${theme?.colors?.alerts?.buttonDisabled || "#C43A3B"};
        color: ${theme?.colors?.others?.white || "#FFFFFF"};
      }
    `;
  }

  const variants = {
    primary: `
      background-color: ${theme?.colors?.primary?.[900] || "#F5484A"};
      color: ${theme?.colors?.others?.white || "#FFFFFF"};
      border-color: ${theme?.colors?.primary?.[900] || "#F5484A"};

      &:hover {
        opacity: 0.9;
      }
    `,
    secondary: `
      background-color: ${theme?.colors?.primary?.[50] || "#FEEDED"};
      color: ${theme?.colors?.primary?.[900] || "#F5484A"};
      border-color: ${theme?.colors?.primary?.[50] || "#FEEDED"};

      &:hover {
        opacity: 0.9;
      }
    `,
    ghost: `
      background-color: transparent;
      color: ${theme?.colors?.primary?.[900] || "#F5484A"};
      border-color: transparent;

      &:hover {
        background-color: ${theme?.colors?.primary?.[900] || "#F5484A"}10;
      }
    `,
    outline: `
      background-color: transparent;
      color: ${theme?.colors?.primary?.[900] || "#F5484A"};
      border-color: ${theme?.colors?.greyscale?.[300] || "#E0E0E0"};

      &:hover {
        background-color: ${theme?.colors?.primary?.[900] || "#F5484A"}05;
      }
    `,
  };

  return variants[variant as keyof typeof variants] || variants.primary;
};

const getSizeStyles = (size: string) => {
  const sizes = {
    sm: `
      padding: 14px 16px;
      font-size: 14px;
    `,
    md: `
      padding: 18px 16px;
      font-size: 16px;
    `,
    lg: `
      padding: 22px 16px;
      font-size: 18px;
    `,
  };

  return sizes[size as keyof typeof sizes] || sizes.md;
};

const StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props) =>
    props.shape === "rounded"
      ? props.theme.borderRadius?.rounded || "100px"
      : props.theme.borderRadius?.button || "16px"};
  font-family: ${(props) =>
    props.theme.typography?.fontFamily?.primary || "Urbanist, sans-serif"};
  font-weight: ${(props) => props.theme.typography?.fontWeight?.bold || 700};
  border: 1px solid;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${(props) => getSizeStyles(props.size || "md")}
  ${(props) =>
    getVariantStyles(
      props.variant || "primary",
      props.theme,
      props.disabled || false,
    )}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

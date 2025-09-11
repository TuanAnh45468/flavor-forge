'use client'
import styled from "styled-components";
import { getSpacing, getFontWeight } from "@/lib/theme-utils";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => getSpacing(props.theme, 'sm')} ${props => getSpacing(props.theme, 'lg')};
  border-radius: ${props => props.theme.borderRadius.default}px;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-weight: ${props => getFontWeight(props.theme, 'bold')};
  border: 2px solid;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.variant === 'secondary' ? `
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
    
    &:hover {
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.others.white};
    }
  ` : `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.others.white};
    border-color: ${props.theme.colors.primary};
    
    &:hover {
      opacity: 0.9;
    }
  `}
`;
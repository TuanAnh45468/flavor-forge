'use client'
import styled from "styled-components";
import React from "react";

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

const variants = {
    primary: (theme: any) => `
      background-color: ${theme?.colors?.primary || '#F5484A'};
      color: ${theme?.colors?.others?.white || '#FFFFFF'};
      border-color: ${theme?.colors?.primary || '#F5484A'};

      &:hover {
        opacity: 0.9;
      }
    `,

    secondary: (theme: any) => `
    background-color: transparent;
    color: ${theme?.colors?.primary || '#F5484A'};
    border-color: ${theme?.colors?.primary || '#F5484A'};

    &:hover {
      background-color: ${theme?.colors?.primary || '#F5484A'};
      color: ${theme?.colors?.others?.white || '#FFFFFF'};
    }
  `,
    ghost: (theme: any) => `
    background-color: transparent;
    color: ${theme?.colors?.primary || '#F5484A'};
    border-color: transparent;

    &:hover {
      background-color: ${theme?.colors?.primary || '#F5484A'}10;
    }
  `,
    outline: (theme: any) => `
    background-color: transparent;
    color: ${theme?.colors?.primary || '#F5484A'};
    border-color: ${theme?.colors?.primary || '#F5484A'};

    &:hover {
      background-color: ${theme?.colors?.primary || '#F5484A'}05;
      border-color: ${theme?.colors?.primary || '#F5484A'};
    }
  `
};

const sizes = {
    sm: (theme: any) => `
    padding: ${theme?.spacing?.xs || '12px'} ${theme?.spacing?.sm || '16px'};
    font-size: ${theme?.typography?.fontSize?.sm || '14px'};
  `,
    md: (theme: any) => `
    padding: ${theme?.spacing?.sm || '16px'} ${theme?.spacing?.md || '24px'};
    font-size: ${theme?.typography?.fontSize?.body || '16px'};
  `,
    lg: (theme: any) => `
    padding: ${theme?.spacing?.md || '24px'} ${theme?.spacing?.lg || '40px'};
    font-size: ${theme?.typography?.fontSize?.lg || '18px'};
  `
};

export const Button = styled.button<ButtonProps>`
    border-radius: ${props => props.theme.borderRadius?.default || 8};
    font-family: ${props => props.theme.typography?.fontFamily?.primary || 'inherit'};
    font-weight: ${props => props.theme.typography?.fontWeight?.bold || 700};
    border: 2px solid;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${props => sizes[props.size || 'md'](props.theme)}
    ${props => variants[props.variant || 'primary'](props.theme)}
`;
import { DefaultTheme } from "styled-components";

// Helper function to get color values from theme
export const getColor = (theme: DefaultTheme, colorPath: string) => {
  const pathArray = colorPath.split(".");
  let result: any = theme.colors;

  for (const key of pathArray) {
    result = result?.[key];
  }

  return result || colorPath;
};

// Helper function to get spacing values
export const getSpacing = (
  theme: DefaultTheme,
  size: keyof typeof theme.spacing,
) => {
  return `${theme.spacing[size]}px`;
};

// Helper function to get font size
export const getFontSize = (
  theme: DefaultTheme,
  size: keyof typeof theme.typography.fontSize,
) => {
  return `${theme.typography.fontSize[size]}px`;
};

// Helper function to get font weight
export const getFontWeight = (
  theme: DefaultTheme,
  weight: keyof typeof theme.typography.fontWeight,
) => {
  return theme.typography.fontWeight[weight];
};

// Helper function for responsive font scaling
export const getResponsiveFontSize = (
  baseSizePx: number,
  scaleFactor = 0.8,
) => {
  return `
    font-size: ${baseSizePx * scaleFactor}px;
    
    @media (min-width: 768px) {
      font-size: ${baseSizePx}px;
    }
  `;
};

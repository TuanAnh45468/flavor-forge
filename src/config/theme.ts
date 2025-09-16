export const colors = {
  primary: {
    900: '#F5484A',
  },
  secondary: {
    900: '#FF9800',
  },
  greyscale: {
    50: '#FAFAFA',
    900: '#212121',
  },
  dark: {
    1: '#181A20',
    2: '#1F222A',
    3: '#262A35',
  },
  others: {
    white: '#FFFFFF',
  },
} as const;

export const typography = {
  fontFamily: {
    primary: 'Urbanist, sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  fontWeight: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
  fontSize: {
    h1: '48px',
    body: '16px',
  },
  lineHeight: {
    h1: 1.6,
    body: 1.5,
  },
} as const;

export const spacing = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '60px',
  xxl: '80px',
  xxxl: '140px',
  xxxxl: '200px',
} as const;

export const borderRadius = {
  default: '32px',
} as const;

export const lightTheme = {
  colors: {
    ...colors,
    background: colors.others.white,
    text: colors.greyscale[900],
    primary: colors.primary[900],
    secondary: colors.secondary[900],
  },
  typography,
  spacing,
  borderRadius,
} as const;

export const darkTheme = {
  colors: {
    ...colors,
    background: colors.dark[1],
    text: colors.others.white,
    primary: colors.primary[900],
    secondary: colors.secondary[900],
  },
  typography,
  spacing,
  borderRadius,
} as const;

// Default theme export (light theme)
export const theme = lightTheme;
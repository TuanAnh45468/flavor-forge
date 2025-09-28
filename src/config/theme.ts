export const colors = {
  primary: {
    50: "#FEEDED",
    900: "#F5484A",
  },
  secondary: {
    900: "#FF9800",
  },
  greyscale: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  dark: {
    1: "#181A20",
    2: "#1F222A",
    3: "#262A35",
    4: "#35383F",
  },
  alerts: {
    success: "#12D18E",
    info: "#246BFD",
    warning: "#FACC15",
    error: "#F75555",
    disabled: "#D8D8D8",
    buttonDisabled: "#C43A3B",
  },
  others: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#F54336",
    pink: "#EA1E61",
    purple: "#9D28AC",
    deepPurple: "#673AB3",
    indigo: "#3F51B2",
    blue: "#1A96F0",
    lightBlue: "#00A9F1",
    cyan: "#00BCD3",
    teal: "#009689",
    green: "#4AAF57",
    lightGreen: "#8BC255",
    lime: "#CDDC4C",
    yellow: "#FFEB4F",
    amber: "#FFC02D",
    orange: "#FF981F",
    deepOrange: "#FF5726",
    brown: "#7A5548",
    blueGrey: "#607D8A",
  },
  background: {
    red: "#FFF4F4",
    orange: "#FFF8EE",
    yellow: "#FFFCEB",
    green: "#F1FDF5",
    blue: "#F6F9FF",
    purple: "#F9F8FF",
    teal: "#F2FFFD",
  },
  transparent: {
    red: "rgba(245, 72, 74, 0.08)",
    orange: "rgba(248, 147, 0, 0.08)",
    yellow: "rgba(255, 211, 0, 0.08)",
    green: "rgba(27, 172, 75, 0.08)",
    blue: "rgba(36, 107, 253, 0.08)",
    purple: "rgba(105, 73, 255, 0.08)",
    teal: "rgba(1, 155, 131, 0.08)",
    cyan: "rgba(0, 188, 212, 0.08)",
  },
  gradients: {
    red: "linear-gradient(-45deg, rgba(245, 72, 74, 1) 0%, rgba(255, 116, 117, 1) 100%)",
    orange:
      "linear-gradient(-45deg, rgba(248, 147, 0, 1) 0%, rgba(255, 187, 88, 1) 100%)",
    yellow:
      "linear-gradient(-45deg, rgba(250, 204, 21, 1) 0%, rgba(255, 229, 128, 1) 100%)",
    green:
      "linear-gradient(-45deg, rgba(18, 209, 142, 1) 0%, rgba(113, 227, 187, 1) 100%)",
    blue: "linear-gradient(-45deg, rgba(36, 107, 253, 1) 0%, rgba(80, 137, 253, 1) 100%)",
    purple:
      "linear-gradient(-45deg, rgba(105, 73, 255, 1) 0%, rgba(135, 109, 255, 1) 100%)",
    teal: "linear-gradient(-45deg, rgba(1, 155, 131, 1) 0%, rgba(24, 198, 171, 1) 100%)",
  },
} as const;

export const typography = {
  fontFamily: {
    primary: "Urbanist, sans-serif",
    secondary: "Poppins, sans-serif",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
  },
  fontSize: {
    // Headings
    h1: "48px",
    h2: "40px",
    h3: "32px",
    h4: "24px",
    h5: "20px",
    h6: "18px",

    // Body text
    bodyXLarge: "18px",
    bodyLarge: "16px",
    bodyMedium: "14px",
    bodySmall: "12px",
    bodyXSmall: "10px",
  },
  lineHeight: {
    // Headings
    h1: 1.6,
    h2: 1.6,
    h3: 1.6,
    h4: 1.6,
    h5: 1.6,
    h6: 1.6,

    // Body text
    bodyXLarge: 1.4,
    bodyLarge: 1.4,
    bodyMedium: 1.4,
    bodySmall: 1.2,
    bodyXSmall: 1.2,
  },
  letterSpacing: {
    // Body text letter spacing
    bodyXLarge: "1.11%",
    bodyLarge: "1.25%",
    bodyMedium: "1.43%",
    bodySmall: "1.67%",
    bodyXSmall: "2%",
  },
} as const;

export const spacing = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "40px",
  xl: "60px",
  xxl: "80px",
  xxxl: "140px",
  xxxxl: "200px",
} as const;

export const borderRadius = {
  default: "16px",
  rounded: "100px",
  button: "16px",
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

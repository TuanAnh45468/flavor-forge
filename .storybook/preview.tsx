import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { lightTheme, darkTheme } from "../src/config/theme";

const GlobalStyles = createGlobalStyle<{ theme: typeof lightTheme }>`
  body {
    font-family: "Urbanist", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ${props => props.theme.colors?.background || '#FFFFFF'};
    color: ${props => props.theme.colors?.text || '#212121'};
  }
`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      withThemeFromJSXProvider({
          themes: {
              light: lightTheme,
              dark: darkTheme
          },
          defaultTheme: 'light',
          Provider: ThemeProvider,
          GlobalStyles: GlobalStyles,
      }),
  ],
};

export default preview;
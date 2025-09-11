import 'styled-components';
import { colors, typography, spacing, borderRadius } from '@/config/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      greyscale: typeof colors.greyscale;
      dark: typeof colors.dark;
      others: typeof colors.others;
    };
    typography: typeof typography;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
    variant?: 'primary' | 'secondary'
  }
}
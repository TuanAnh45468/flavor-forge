'use client'

import React, { createContext, useContext, useState, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '@/config/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: DefaultTheme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider = ({ children, defaultMode = 'light' }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultMode);

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleTheme = useCallback(() => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const value: ThemeContextType = {
    theme,
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
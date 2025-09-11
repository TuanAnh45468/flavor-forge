'use client'

import styled from 'styled-components';
import { useTheme } from '@/providers/theme-provider';
import { Button } from '@/components/button/button';

const Container = styled.div`
  padding: ${props => props.theme.spacing.lg}px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const ThemeInfo = styled.div`
  margin-bottom: ${props => props.theme.spacing.md}px;
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const ThemeToggle = () => {
  const { toggleTheme, themeMode, theme } = useTheme();

  return (
    <Container>
      <ThemeInfo>
        <h1>Current Theme: {themeMode}</h1>
        <p>Background: {theme.colors.background}</p>
        <p>Text: {theme.colors.text}</p>
        <p>Primary: {theme.colors.primary}</p>
      </ThemeInfo>
      
      <Button onClick={toggleTheme} variant="primary">
        Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
      
      <div style={{ marginTop: '20px' }}>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </Container>
  );
};
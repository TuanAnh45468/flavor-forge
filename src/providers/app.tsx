'use client'

import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "@/providers/theme-provider";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { IS_DEVELOPMENT } from "@/config/constants";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

const StyledThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    return (
        <StyledThemeProvider theme={theme} >
            {children}
        </StyledThemeProvider>
    );
};

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ThemeProvider defaultMode={'dark'}>
            <StyledThemeProviderWrapper>
                <QueryClientProvider client={queryClient}>
                    {IS_DEVELOPMENT && (<ReactQueryDevtools initialIsOpen={false} />)}
                    <ErrorBoundary fallback={<div>Something went wrong</div>} onError={console.error}>
                        {children}
                    </ErrorBoundary>
                </QueryClientProvider>
            </StyledThemeProviderWrapper>
        </ThemeProvider>
    )
}
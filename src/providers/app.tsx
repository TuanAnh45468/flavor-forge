'use client'

import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { IS_DEVELOPMENT } from "@/config/constants";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { useThemeStore } from "@/stores";

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const theme = useThemeStore(state => state.theme);

    return (
        <StyledThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                {IS_DEVELOPMENT && (<ReactQueryDevtools initialIsOpen={false} />)}
                <ErrorBoundary fallback={<div>Something went wrong</div>} onError={console.error}>
                    {children}
                </ErrorBoundary>
            </QueryClientProvider>
        </StyledThemeProvider>
    )
}
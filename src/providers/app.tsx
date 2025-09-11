'use client'

import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "@/config/theme";
import {queryClient} from "@/lib/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import {IS_DEVELOPMENT} from "@/config/constants";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ErrorBoundary} from "react-error-boundary";

type AppProviderProps = {
    children: React.ReactNode
}
export const AppProvider = ({children}: AppProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                {IS_DEVELOPMENT && (<ReactQueryDevtools initialIsOpen={false}/>)}
                <ErrorBoundary fallback={<div>Something went wrong </div>} onError={console.error}>
                    {children}
                </ErrorBoundary>
            </QueryClientProvider>
        </ThemeProvider>
    )
}
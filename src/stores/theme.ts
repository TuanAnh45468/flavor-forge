import { create } from 'zustand'
import { DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme } from "@/config/theme"

export type ThemeStore = {
    themeMode: 'light' | 'dark'
    toggleTheme: () => void
    setThemeMode: (mode: 'light' | 'dark') => void
    theme: DefaultTheme
}
// todo use zustand persisted state
export const useThemeStore = create<ThemeStore>((set, get) => ({
    themeMode: 'light',
    toggleTheme: () => set((state) => {
        const newMode = state.themeMode === 'light' ? 'dark' : 'light'
        return {
            themeMode: newMode,
            theme: newMode === 'light' ? lightTheme : darkTheme
        }
    }),
    setThemeMode: (mode: 'light' | 'dark') => set({
        themeMode: mode,
        theme: mode === 'light' ? lightTheme : darkTheme
    }),
    theme: lightTheme
}))
import { createContext } from 'react';

export enum Theme {
    LIGHT = 'APP_LIGHT_THEME',
    DARK = 'APP_DARK_THEME',
}

export interface ThemeContextProps {
    theme?: Theme.DARK | Theme.LIGHT;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

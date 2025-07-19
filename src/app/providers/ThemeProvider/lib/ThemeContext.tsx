import { createContext, Dispatch, SetStateAction } from "react";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: THEMES;
  setTheme?: Dispatch<SetStateAction<THEMES>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

import { THEMES, useTheme } from "app/providers/ThemeProvider";
import classNames from "classnames";
import cls from "./ThemeSwitcher.module.scss";
import SunIcon from "shared/assets/icons/sun.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="clear"
      className={classNames(cls.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === THEMES.LIGHT ? (
        <SunIcon className={cls.icon} />
      ) : (
        <MoonIcon className={cls.icon} />
      )}
    </Button>
  );
};

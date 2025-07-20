import classNames from "classnames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          to="/"
          className={classNames(cls.mainLink)}
          variant="invertedPrimary"
        >
          Главная
        </AppLink>
        <AppLink to="/about" variant="invertedPrimary">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

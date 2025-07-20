import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames";
import cls from "./AppLink.module.scss";
import { ReactNode } from "react";

export type AppLinkVariant =
  | "primary"
  | "invertedPrimary"
  | "secondary"
  | "invertedSecondary";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink = ({
  children,
  className,
  variant = "primary",
  to,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

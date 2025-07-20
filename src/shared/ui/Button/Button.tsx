import classNames from "classnames";
import cls from "./Button.module.scss";
import { ReactNode } from "react";

export type ButtonVariant = "clear" | "outline" | "filled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  className,
  variant,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.button, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

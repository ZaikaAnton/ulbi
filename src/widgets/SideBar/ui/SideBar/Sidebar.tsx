import classNames from "classnames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sideBar, className, {
        [cls.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  );
};

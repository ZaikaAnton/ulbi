import classNames from "classnames";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import AppRouter from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Suspense fallback={""}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

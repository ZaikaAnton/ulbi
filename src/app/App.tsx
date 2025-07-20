import classNames from "classnames";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import AppRouter from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;

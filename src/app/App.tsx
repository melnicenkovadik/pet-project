import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import { cn } from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={cn("app", theme)}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;

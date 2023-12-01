import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import { cn } from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={cn("app", theme)}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;

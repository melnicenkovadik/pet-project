import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRouts {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutePath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: "/",
    [AppRouts.ABOUT]: "/about",
};

export const routeConfig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: RoutePath[AppRouts.MAIN],
        element: <MainPage/>
    },
    [AppRouts.ABOUT]: {
        path: RoutePath[AppRouts.ABOUT],
        element: <AboutPage/>
    }
};

export const routeConfigArray = Object.values(routeConfig);

import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: RoutePath[AppRouts.MAIN],
        element: <MainPage />,
    },
    [AppRouts.ABOUT]: {
        path: RoutePath[AppRouts.ABOUT],
        element: <AboutPage />,
    },
    [AppRouts.NOT_FOUND]: {
        path: RoutePath[AppRouts.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

export const routeConfigArray = Object.values(routeConfig);

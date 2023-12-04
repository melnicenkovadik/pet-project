import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

import App from "./app/App";

import "./shared/config/i18n/i18n";
import "app/styles/index.scss";
import {Suspense} from "react";

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="">
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
    , document.getElementById("root"));

import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfigArray} from "shared/config/routeConfig/route.config";

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                routeConfigArray.map(({element, path, ...props}) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                                {...props}
                            />
                        );
                    }
                )
            }
        </Routes>
    </Suspense>
);

export default AppRouter;

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfigArray } from 'shared/config/routeConfig/route.config';

const AppRouter = () => (
    <Suspense fallback="">
        <Routes>
            {
                routeConfigArray.map(({
                    element,
                    path,
                    ...otherProps
                }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                        {...otherProps}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
